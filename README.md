# comcompod-on-the-fringe

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `gulp` for building and `gulp serve` for preview.

## Testing

Running `gulp test` will run the unit tests with karma.

## Building

First, gather the data. This may change year-to-year; it worked for 2016:

```shell
# Use the Fringe's solr API to get shows with a limited set of fields
$ curl -s 'https://tickets.edfringe.com/solr/select?fl=name,group_name,times,event_url&q=*%3A*&wt=json&rows=3580' > fringe-data.json

# Soundcloud seems to enforce pagination, so get two pages and combine
$ curl -s 'https://api-v2.soundcloud.com/users/6071615/tracks?representation=&client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea&limit=200&offset=0&linked_partitioning=1&app_version=1469103556' > ccp-data.json
$ curl -s 'https://api-v2.soundcloud.com/users/6071615/tracks?representation=&client_id=02gUJC0hH2ct1EGOcYXQIzRFU91c72Ea&limit=200&offset=98210633&linked_partitioning=1&app_version=1469103556' > ccp-data-2.json
$ jq '.[0].collection + .[1].collection' -s ccp-data.json ccp-data-2.json > ccp-data-combined.json
```

Then, search for matching shows and create a new JSON array:

```ruby
require 'json'

fringe = JSON.parse(open('fringe-data.json').read)
ccp = JSON.parse(open('ccp-data-combined.json').read)
matches = []

def clean_title(title)
  match = title.match(/\A.*\d+\W+(.*?)( \(.+\))?\z/)

  match ? match[1] : title
end

ccp.each do |episode|
  comedian = clean_title(episode['title'])

  match = fringe['response']['docs'].find do |show|
    show['group_name'].include?(comedian) || show['name'].include?(comedian)
  end

  if match
    event_url = match['event_url'].split('/')

    matches << match.merge('podcast_url' => episode['permalink_url'],
                           'podcast_title' => episode['title'],
                           'event_url' => "#{event_url.first}/#{event_url.last}")
  end
end

puts JSON.pretty_generate(matches)
```
