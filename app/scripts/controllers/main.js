'use strict';

/**
 * @ngdoc function
 * @name comcompodOnTheFringeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comcompodOnTheFringeApp
 */

// Add these manually
// {
//     "name": "The Boy With Tape On His Face: Tape Face",
//     "group_name": "Chambers Touring Ltd",
//     "times": "21:40",
//     "event_url": "whats-on/tape-face",
//     "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-18-the-boy-with-tape-on",
//     "podcast_title": "CCP Ep 18 - The Boy With Tape On His Face (Live)"
// },
// {
//     "name": "Tiff Stevenson: Bombshell",
//     "group_name": "Tiff Stevenson",
//     "times": "17:30",
//     "event_url": "whats-on/tiff-stevenson-bombshell",
//     "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-177-tiff-stevensonlive-at-larmer-tree-festival",
//     "podcast_title": "CCP 177 - Tiff Stevenson(Live At Larmer Tree Festival)"
// },
// {
//     "name": "Stuart Goldsmith: Like I Mean It",
//     "group_name": "Stuart Goldsmith",
//     "times": "15:45",
//     "event_url": "whats-on/stuart-goldsmith-like-i-mean-it",
//     "podcast_url": "https://soundcloud.com/stu-goldsmith",
//     "podcast_title": "The Comedian's Comedian wit Stuart Goldsmith"
// },
angular.module('comcompodOnTheFringeApp')
    .controller('MainCtrl', function() {
        this.newshows = [{
                "name": "The Boy With Tape On His Face: Tape Face",
                "group_name": "Chambers Touring Ltd",
                "times": "21:40",
                "event_url": "whats-on/tape-face",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-18-the-boy-with-tape-on",
                "podcast_title": "CCP Ep 18 - The Boy With Tape On His Face (Live)"
            },
            {
                "name": "Tiff Stevenson: Bombshell",
                "group_name": "Tiff Stevenson",
                "times": "17:30",
                "event_url": "whats-on/tiff-stevenson-bombshell",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-177-tiff-stevensonlive-at-larmer-tree-festival",
                "podcast_title": "CCP 177 - Tiff Stevenson(Live At Larmer Tree Festival)"
            },
            {
                "name": "Stuart Goldsmith: Like I Mean It",
                "group_name": "Stuart Goldsmith",
                "times": "15:45",
                "event_url": "whats-on/stuart-goldsmith-like-i-mean-it",
                "podcast_url": "https://soundcloud.com/stu-goldsmith",
                "podcast_title": "The Comedian's Comedian wit Stuart Goldsmith"
            },
            {
                "name": "Nick Cody: On Fire",
                "group_name": "MZA in association with Century Entertainment",
                "times": "20:20",
                "event_url": "whats-on/nick-cody-on-fire",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/214-nick-cody",
                "podcast_title": "214 - Nick Cody"
            },
            {
                "name": "Simon Munnery: Renegade Plumber",
                "group_name": "Show And Tell / Salt 'n' Sauce Promotions",
                "times": "15:20",
                "event_url": "whats-on/simon-munnery-renegade-plumber",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/213-simon-munnery",
                "podcast_title": "213 - Simon Munnery"
            },
            {
                "name": "Barry Cryer and Ronnie Golden: Just the Two at Six",
                "group_name": "Gilded Balloon and Steve Ullathorne present...",
                "times": "18:00",
                "event_url": "whats-on/barry-cryer-and-ronnie-golden-just-the-two-at-six",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/211-barry-cryer",
                "podcast_title": "211 - Barry Cryer"
            },
            {
                "name": "Pippa Evans: Joy Provision!",
                "group_name": "Chambers Touring Ltd",
                "times": "14:40",
                "event_url": "whats-on/pippa-evans-joy-provision",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/210-pippa-evans",
                "podcast_title": "210 - Pippa Evans"
            },
            {
                "name": "Ed Gamble: Mammoth",
                "group_name": "Avalon Promotions Ltd",
                "times": "19:15, 23:00",
                "event_url": "whats-on/ed-gamble-mammoth",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/209-ed-gamble-live-at-stonefree-festival",
                "podcast_title": "209 - Ed Gamble (Live At Stonefree Festival)"
            },
            {
                "name": "Tom Ballard: Problematic",
                "group_name": "Fight in the Dog, Token Events & Dawn Sedgwick Mgt",
                "times": "20:30",
                "event_url": "whats-on/tom-ballard-problematic",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/207-tom-ballard",
                "podcast_title": "207 - Tom Ballard"
            },
            {
                "name": "Lost Voice Guy: Inspiration Porn ",
                "group_name": "Lost Voice Guy / The Stand Comedy Club ",
                "times": "13:15",
                "event_url": "whats-on/lost-voice-guy-inspiration-porn",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/206-lost-voice-guy-aka-lee-ridley",
                "podcast_title": "206 - Lost Voice Guy (AKA Lee Ridley)"
            },
            {
                "name": "Rhys Nicholson: I'm Fine",
                "group_name": "Underbelly and Century Entertainment",
                "times": "21:15",
                "event_url": "whats-on/rhys-nicholson-i-m-fine",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/205-rhys-nicholson",
                "podcast_title": "205 - Rhys Nicholson"
            },
            {
                "name": "Aunty Donna: Big Boys",
                "group_name": "Century Entertainment",
                "times": "22:30",
                "event_url": "whats-on/aunty-donna-big-boys",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/203-aunty-donna",
                "podcast_title": "203 - Aunty Donna"
            },
            {
                "name": "Hannah Gadsby – Nanette",
                "group_name": "Hannah Gadsby",
                "times": "15:50",
                "event_url": "whats-on/hannah-gadsby-nanette-1",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/202-hannah-gadsby-live-at-melbourne-comedy-festival",
                "podcast_title": "202 - Hannah Gadsby (Live At Melbourne Comedy Festival)"
            },
            {
                "name": "Mark Forward Wins All the Awards",
                "group_name": "Gag Reflex in association with TGA",
                "times": "20:15",
                "event_url": "whats-on/mark-forward-wins-all-the-awards",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/198-mark-forward",
                "podcast_title": "198 - Mark Forward"
            },
            {
                "name": "Phil Wang: Kinabalu",
                "group_name": "Avalon Promotions Ltd",
                "times": "19:00, 22:45",
                "event_url": "whats-on/phil-wang-kinabalu",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/197-phil-wang",
                "podcast_title": "197 - Phil Wang"
            },
            {
                "name": "Rachel Parris: Keynote",
                "group_name": "Live Nation in association with Troika",
                "times": "20:20",
                "event_url": "whats-on/rachel-parris-keynote",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/196-rachel-parris",
                "podcast_title": "196 - Rachel Parris"
            },
            {
                "name": "Angela Barnes: Fortitude",
                "group_name": "Off the Kerb Productions",
                "times": "19:15",
                "event_url": "whats-on/angela-barnes-fortitude",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/193-angela-barnes",
                "podcast_title": "193 - Angela Barnes"
            },
            {
                "name": "Fern Brady: Suffer, Fools!",
                "group_name": "Fern Brady / The Stand Comedy Club ",
                "times": "12:05",
                "event_url": "whats-on/fern-brady-suffer-fools",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/190-fern-brady",
                "podcast_title": "190 - Fern Brady"
            },
            {
                "name": "Carmen Lynch: Lynched",
                "group_name": "Carmen Lynch / Free Festival",
                "times": "16:00",
                "event_url": "whats-on/carmen-lynch-lynched",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/187-carmen-lynch",
                "podcast_title": "187 - Carmen Lynch"
            },
            {
                "name": "Barry Crimmins: Atlas's Knees",
                "group_name": "Barry Crimmins / Lakin McCarthy / The Stand Comedy Club",
                "times": "21:40",
                "event_url": "whats-on/barry-crimmins-atlas-s-knees",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/184-barry-crimmins",
                "podcast_title": "184 - Barry Crimmins"
            },
            {
                "name": "Paul Currie: Cats in My Mouth",
                "group_name": "Paul Currie / Heroes / PWYW",
                "times": "20:30",
                "event_url": "whats-on/paul-currie-cats-in-my-mouth",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/183-paul-currie",
                "podcast_title": "183 - Paul Currie"
            },
            {
                "name": "John Robins: The Darkness of Robins",
                "group_name": "Phil McIntyre Entertainments",
                "times": "18:40",
                "event_url": "whats-on/john-robins-the-darkness-of-robins",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/181-john-robins",
                "podcast_title": "181 - John Robins"
            },
            {
                "name": "Loyiso Gola: Unlearning",
                "group_name": "Mick Perrin Worldwide Artist Management ",
                "times": "21:00",
                "event_url": "whats-on/loyiso-gola-unlearning",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/179-loyiso-gola",
                "podcast_title": "179 - Loyiso Gola"
            },
            {
                "name": "Shappi Khorsandi: Mistress and Misfit",
                "group_name": "Off The Kerb Productions",
                "times": "21:40",
                "event_url": "whats-on/shappi-khorsandi-mistress-and-misfit-1",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-171-shappi-korsandi",
                "podcast_title": "CCP 171 - Shappi Khorsandi"
            },
            {
                "name": "Joe Lycett and Friends",
                "group_name": "Chambers Touring / Salt ‘n’ Sauce Promotions",
                "times": "19:20",
                "event_url": "whats-on/joe-lycett-and-friends",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-168",
                "podcast_title": "168 - Joe Lycett (Live at Machynlleth Comedy Festival)"
            },
            {
                "name": "Seymour Mace's Magical Shitcakes from Heaven",
                "group_name": "Seymour Mace / The Stand Comedy Club ",
                "times": "13:30",
                "event_url": "whats-on/seymour-mace-s-magical-shitcakes-from-heaven",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/167-seymour-mace",
                "podcast_title": "167 - Seymour Mace"
            },
            {
                "name": "Abigoliah Schamaun: Namaste, Bitches",
                "group_name": "Live Nation",
                "times": "19:40",
                "event_url": "whats-on/abigoliah-schamaun-namaste-bitches",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-166-abigoliah-schamaun",
                "podcast_title": "CCP 166 - Abigoliah Schamaun"
            },
            {
                "name": "Gein's Family Giftshop: Volume 3",
                "group_name": "Live Nation",
                "times": "22:20",
                "event_url": "whats-on/gein-s-family-giftshop-volume-3",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp160-geins-family-giftshop",
                "podcast_title": "CCP160 - Gein's Family Giftshop"
            },
            {
                "name": "Mark Steel: Every Little Thing's Gonna Be Alright",
                "group_name": "Off The Kerb Productions",
                "times": "21:35",
                "event_url": "whats-on/mark-steel-every-little-thing-s-gonna-be-alright",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp154-mark-steel-live-at-the-edinburgh-fringe",
                "podcast_title": "CCP154 - Mark Steel (Live at the Edinburgh Fringe)"
            },
            {
                "name": "Daniel Sloss: NOW",
                "group_name": "MZA & Get Slossed Productions",
                "times": "21:00",
                "event_url": "whats-on/daniel-sloss-now",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp151-daniel-sloss-live-at-the-edinburgh-fringe",
                "podcast_title": "CCP152 - Daniel Sloss (Live at the Edinburgh Fringe)"
            },
            {
                "name": "Jason Byrne: The Man with Three Brains",
                "group_name": "Phil McIntyre Entertainments by arrangement with Lisa Thomas Management",
                "times": "21:00",
                "event_url": "whats-on/jason-byrne-the-man-with-three-brains",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp147-jason-byrne-live-at-the-edinburgh-fringe",
                "podcast_title": "CCP147 - Jason Byrne (Live at the Edinburgh Fringe)"
            },
            {
                "name": "Mae Martin and Nick Coyle: Show Party",
                "group_name": "Mae Martin, Nick Coyle, Special Guests",
                "times": "22:30",
                "event_url": "whats-on/mae-martin-and-nick-coyle-show-party",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp140-mae-martin-live-at-the-edinburgh-fringe",
                "podcast_title": "CCP140 - Mae Martin (Live at the Edinburgh Fringe)"
            },
            {
                "name": "Tommy Tiernan: Under the Influence",
                "group_name": "Mick Perrin Worldwide",
                "times": "19:30",
                "event_url": "whats-on/tommy-tiernan-under-the-influence",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp139-tommy-tiernan-live-at-the-edinburgh-fringe",
                "podcast_title": "CCP139 - Tommy Tiernan (Live at the Edinburgh Fringe)"
            },
            {
                "name": "Justin Moorhouse: People and Feelings",
                "group_name": "CKP",
                "times": "18:00",
                "event_url": "whats-on/justin-moorhouse-people-and-feelings",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp136-justin-moorhouse",
                "podcast_title": "CCP136 - Justin Moorhouse"
            },
            {
                "name": "Charlie Baker: The Hit Polisher",
                "group_name": "Off The Kerb Productions",
                "times": "20:00",
                "event_url": "whats-on/charlie-baker-the-hit-polisher",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp135-charlie-baker-live-at-latitude-festival",
                "podcast_title": "CCP135 - Charlie Baker (Live at Latitude Festival)"
            },
            {
                "name": "George Egg: DIY Chef",
                "group_name": "Badge Farm Foundation",
                "times": "16:15",
                "event_url": "whats-on/george-egg-diy-chef",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp130-george-egg",
                "podcast_title": "CCP130 - George Egg"
            },
            {
                "name": "Gavin Webster: It's About Time We Had More Women in There",
                "group_name": "Gavin Webster / The Stand Comedy Club ",
                "times": "19:35",
                "event_url": "whats-on/gavin-webster-it-s-about-time-we-had-more-women-in-there",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp127-gavin-webster-live",
                "podcast_title": "CCP127 - Gavin Webster (Live)"
            },
            {
                "name": "Nazeem Hussain – Hussain In The Membrane",
                "group_name": "Nazeem Hussain",
                "times": "20:00",
                "event_url": "whats-on/nazeem-hussain-hussain-in-the-membrane",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp126-nazeem-hussain",
                "podcast_title": "CCP126 - Nazeem Hussain"
            },
            {
                "name": "Mitch Benn: I'm Still Here",
                "group_name": "Mitch Benn / The Stand Comedy Club ",
                "times": "14:50",
                "event_url": "whats-on/mitch-benn-i-m-still-here",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp121-mitch-benn-live",
                "podcast_title": "CCP121 - Mitch Benn (Live)"
            },
            {
                "name": "Mark Watson: This Is Not A Show Yet",
                "group_name": "Impatient Productions / The Stand Comedy Club ",
                "times": "13:35",
                "event_url": "whats-on/mark-watson-this-is-not-a-show-yet",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp120-mark-watson-live",
                "podcast_title": "CCP120 - Mark Watson (Live)"
            },
            {
                "name": "Nina Conti: In Therapy",
                "group_name": "PBJ Managment",
                "times": "15:30",
                "event_url": "whats-on/nina-conti-in-therapy",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp119-nina-conti-live",
                "podcast_title": "CCP119 - Nina Conti (Live)"
            },
            {
                "name": "The Midnight Beast: All Killer",
                "group_name": "Live Nation",
                "times": "20:30",
                "event_url": "whats-on/midnight-beast-all-killer",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp118-the-midnight-beast",
                "podcast_title": "CCP118 - The Midnight Beast"
            },
            {
                "name": "Tim Key: Work in Progress",
                "group_name": "PBJ Management",
                "times": "23:00",
                "event_url": "whats-on/tim-key-work-in-progress",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp113-tim-key-part-one-of-two",
                "podcast_title": "CCP113 - Tim Key (Part One of Two)"
            },
            {
                "name": "Brendon Burns and Craig Quartermaine in Race Off",
                "group_name": "Mick Perrin Worldwide",
                "times": "18:45",
                "event_url": "whats-on/brendon-burns-and-craig-quartermaine-in-race-off",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp111-brendon-burns",
                "podcast_title": "CCP111 - Brendon Burns"
            },
            {
                "name": "Andrew O'Neill's Black Magick Fun Hour – Free",
                "group_name": "Andrew O'Neill / PBH's Free Fringe",
                "times": "17:00",
                "event_url": "whats-on/andrew-o-neill-s-black-magick-fun-hour-free",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp109-andrew-oneill",
                "podcast_title": "CCP109 - Andrew O'Neill"
            },
            {
                "name": "Urzila Carlson – First Edition",
                "group_name": "Urzila Carlson",
                "times": "19:45",
                "event_url": "whats-on/urzila-carlson-first-edition",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp107-urzila-carlson",
                "podcast_title": "CCP107 - Urzila Carlson"
            },
            {
                "name": "Thom Tuck: An August Institution",
                "group_name": "@turlygod",
                "times": "15:00",
                "event_url": "whats-on/thom-tuck-an-august-institution",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp106-thom-tuck",
                "podcast_title": "CCP106 - Thom Tuck"
            },
            {
                "name": "Phil Kay: Euphoric",
                "group_name": "Heroes of Fringe / PWYW",
                "times": "21:20",
                "event_url": "whats-on/phil-kay-euphoric",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp100-phil-kay-live",
                "podcast_title": "CCP100 - Phil Kay (Live)"
            },
            {
                "name": "Luisa Omielan: The Interlude – Politics for Bitches/What Would Mary Magdalene Do?! - CANCELLED",
                "group_name": "CatFace Talent",
                "times": "16:30",
                "event_url": "whats-on/luisa-omielan-the-interlude-politics-for-bitches-what-would-mary-magdalene-do-cancelled",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp99-luisa-omielan",
                "podcast_title": "CCP99 - Luisa Omielan"
            },
            {
                "name": "Eleanor Tiernan – People Pleaser",
                "group_name": "Eleanor Tiernan",
                "times": "15:10",
                "event_url": "whats-on/eleanor-tiernan-people-pleaser",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-93-eleanor-tiernan",
                "podcast_title": "CCP93 Eleanor Tiernan"
            },
            {
                "name": "Trygve vs a Baby",
                "group_name": "Trygve Wakenshaw with Don't Be Lonely and Aurora Nova",
                "times": "15:00",
                "event_url": "whats-on/trygve-vs-a-baby",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-95-trygve-wakenshaw",
                "podcast_title": "CCP95 - Trygve Wakenshaw"
            },
            {
                "name": "Tom Stade: I Swear",
                "group_name": "CKP by arrangement with Blue Jeans Management",
                "times": "21:00",
                "event_url": "whats-on/tom-stade-i-swear",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-94-tom-stade-live",
                "podcast_title": "CCP94 - Tom Stade (Live)"
            },
            {
                "name": "Steen Raskopoulos – The Coolest Kid in Competitive Chess",
                "group_name": "Underbelly with Token Events and Dawn Sedgwick Management",
                "times": "20:00",
                "event_url": "whats-on/steen-raskopoulos-the-coolest-kid-in-competitive-chess",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-91-steen-raskopoulos",
                "podcast_title": "CCP EP 91 - Steen Raskopoulos"
            },
            {
                "name": "Phill Jupitus is Porky the Poet in Survivalve",
                "group_name": "Phill Jupitus / PBH's Free Fringe",
                "times": "12:30",
                "event_url": "whats-on/phill-jupitus-is-porky-the-poet-in-survivalve",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-89-phill-jupitus-live",
                "podcast_title": "CCP Ep 89 - Phill Jupitus (Live)"
            },
            {
                "name": "Sam Simmons A-K",
                "group_name": "Avalon Promotions Ltd",
                "times": "21:40",
                "event_url": "whats-on/sam-simmons-a-k",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-88-sam-simmons",
                "podcast_title": "CCP Ep 88 - Sam Simmons"
            },
            {
                "name": "John Hastings: Audacity",
                "group_name": "Mick Perrin Worldwide",
                "times": "21:15",
                "event_url": "whats-on/john-hastings-audacity",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-87-john-hastings",
                "podcast_title": "CCP Ep 87 - John Hastings"
            },
            {
                "name": "Nick Doody: Interesting Times",
                "group_name": "Nick Doody / PBH's Free Fringe",
                "times": "19:30",
                "event_url": "whats-on/nick-doody-interesting-times",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-84-nick-doody",
                "podcast_title": "CCP Ep 84 - Nick Doody"
            },
            {
                "name": "Andy Zaltzman: Satirist for Hire (World of 2017 Special Edition)",
                "group_name": "Andy Zaltzman / The Stand Comedy Club",
                "times": "15:00",
                "event_url": "whats-on/andy-zaltzman-satirist-for-hire-world-of-2017-special-edition",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-82-andy-zaltzman",
                "podcast_title": "CCP Ep 82 - Andy Zaltzman"
            },
            {
                "name": "Adrienne Truscott's a One-Trick Pony (Or Andy Kaufmann is a Feminist Performance Artist and I'm a Comedian)",
                "group_name": "Adrienne Truscott / Heroes of Fringe",
                "times": "14:15",
                "event_url": "whats-on/adrienne-truscott-s-a-one-trick-pony-or-andy-kaufmann-is-a-feminist-performance-artist-and-i-m-a-comedian",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-81-adrienne-truscott",
                "podcast_title": "CCP Ep 81 - Adrienne Truscott"
            },
            {
                "name": "Carey Marx: The Afterwife",
                "group_name": "Carey Marx / PBH's Free Fringe",
                "times": "18:15",
                "event_url": "whats-on/carey-marx-the-afterwife",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-75-carey-marx-live-at",
                "podcast_title": "CCP Ep 75 - Carey Marx (Live at The New Zealand International Comedy Festival)"
            },
            {
                "name": "David O'Doherty: Big Time",
                "group_name": "Lisa Richards",
                "times": "12:00",
                "event_url": "whats-on/david-o-doherty-big-time-1",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-72-david-odoherty-live",
                "podcast_title": "CCP Ep 72 - David O'Doherty (Live)"
            },
            {
                "name": "Tim Vine: Sunset Milk Idiot",
                "group_name": "Bound & Gagged Comedy",
                "times": "16:00",
                "event_url": "whats-on/tim-vine-sunset-milk-idiot",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-70-tim-vine-live",
                "podcast_title": "CCP Ep 70 - Tim Vine (Live)"
            },
            {
                "name": "Ed Byrne: Spoiler Alert",
                "group_name": "Vivienne Smith Management",
                "times": "19:30",
                "event_url": "whats-on/ed-byrne-spoiler-alert",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-69-ed-byrne-live",
                "podcast_title": "CCP Ep 69 - Ed Byrne (Live)"
            },
            {
                "name": "Sean Hughes's Blank Book",
                "group_name": "Gilded Balloon and Sean Hughes Present...",
                "times": "16:00",
                "event_url": "whats-on/sean-hughes-s-blank-book",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-68-sean-hughes-live",
                "podcast_title": "CCP Ep 68 - Sean Hughes (Live)"
            },
            {
                "name": "Gary Delaney: There's Something About Gary",
                "group_name": "CKP and ROAR Group present",
                "times": "21:20",
                "event_url": "whats-on/gary-delaney-there-s-something-about-gary",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp67",
                "podcast_title": "CCP Ep 67 - Gary Delaney (Live in Wolverhampton)"
            },
            {
                "name": "Nick Helm: Masterworks in Progress '17",
                "group_name": "Nick Helm",
                "times": "17:20",
                "event_url": "whats-on/nick-helm-masterworks-in-progress-17",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-65-nick-helm-live-at",
                "podcast_title": "CCP Ep 65 - Nick Helm (Live at Dave's Leicester Comedy Festival)"
            },
            {
                "name": "Tony Law: Absurdity for the Common People",
                "group_name": "Tony Law / The Stand Comedy Club",
                "times": "12:00",
                "event_url": "whats-on/tony-law-absurdity-for-the-common-people",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-64-tony-law-live",
                "podcast_title": "CCP Ep 64 - Tony Law (Live)"
            },
            {
                "name": "Jason Manford: Muddle Class Work in Progress",
                "group_name": "Phil McIntyre Entertainments by arrangement with Lisa Thomas Management",
                "times": "17:15",
                "event_url": "whats-on/jason-manford-muddle-class-work-in-progress",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-57-jason-manford-live",
                "podcast_title": "CCP Ep 57 - Jason Manford (Live)"
            },
            {
                "name": "Andrew Maxwell: Showtime",
                "group_name": "Brett Vincent for Get Comedy",
                "times": "21:00",
                "event_url": "whats-on/andrew-maxwell-showtime",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-56-andrew-maxwell-live",
                "podcast_title": "CCP Ep 56 - Andrew Maxwell (Live)"
            },
            {
                "name": "Milton Jones is Out There",
                "group_name": "Phil McIntyre Entertainments in association with NRH Management",
                "times": "19:30",
                "event_url": "whats-on/milton-jones-is-out-there",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-55-milton-jones-live",
                "podcast_title": "CCP Ep 55 - Milton Jones (Live)"
            },
            {
                "name": "Al Murray: The Pub Landlord's Saloon",
                "group_name": "Avalon Promotions Ltd",
                "times": "18:15",
                "event_url": "whats-on/al-murray-the-pub-landlord-s-saloon",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-53-al-murray-live",
                "podcast_title": "CCP Ep 53 - Al Murray (Live)"
            },
            {
                "name": "Simon Morley: Naked Ambition",
                "group_name": "Directed by Phil Nichol",
                "times": "15:40",
                "event_url": "whats-on/simon-morley-naked-ambition",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-51-phil-nichol-live",
                "podcast_title": "CCP Ep 51 - Phil Nichol (Live)"
            },
            {
                "name": "Richard Herring: Oh Frig, I'm 50!",
                "group_name": "Avalon Promotions Ltd",
                "times": "19:30",
                "event_url": "whats-on/richard-herring-oh-frig-i-m-50",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-46-richard-herring",
                "podcast_title": "CCP Ep 46 Richard Herring"
            },
            {
                "name": "Organ Freeman",
                "group_name": "Jarlath Regan",
                "times": "19:40",
                "event_url": "whats-on/organ-freeman",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-45-jarlath-regan",
                "podcast_title": "CCP Ep 45 - Jarlath Regan"
            },
            {
                "name": "Milo McCabe: The Talented Mr Hawke",
                "group_name": "IMWP",
                "times": "19:00",
                "event_url": "whats-on/milo-mccabe-the-talented-mr-hawke",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-44-milo-mccabe",
                "podcast_title": "CCP Ep 44 - Milo McCabe"
            },
            {
                "name": "Tom Binns is Ian D Montfort: Ian Talk Three",
                "group_name": "Sharon Burgess Productions",
                "times": "20:10",
                "event_url": "whats-on/tom-binns-is-ian-d-montfort-ian-talk-three",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-42-tom-binns-ivan",
                "podcast_title": "CCP Ep 42 - Tom Binns (Ivan Brackenbury, Ian D Montfort)"
            },
            {
                "name": "Tom Allen: Absolutely",
                "group_name": "Off The Kerb Productions",
                "times": "20:00",
                "event_url": "whats-on/tom-allen-absolutely",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-38-tom-allen",
                "podcast_title": "CCP Ep 38 - Tom Allen"
            },
            {
                "name": "David Quirk: Cowboy Mouth",
                "group_name": "David Quirk",
                "times": "20:45",
                "event_url": "whats-on/david-quirk-cowboy-mouth",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-36-david-quirk",
                "podcast_title": "CCP Ep 36 - David Quirk"
            }
        ];
    });
