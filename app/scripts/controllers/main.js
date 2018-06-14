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
    this.newshows =
      [
        {
          "name": "Simon Evans: Genius 2.0",
          "group_name": "Off the Kerb Productions Ltd",
          "times": "20:20",
          "event_url": "whats-on/simon-evans-genius-2-0",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/250-simon-evans",
          "podcast_title": "250 - Simon Evans"
        },
        {
          "name": "Anuvab Pal: Empire",
          "group_name": "Soho Theatre in associaton with Mick Perrin Worldwide Management",
          "times": "19:00",
          "event_url": "whats-on/anuvab-pal-empire",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/249-anuvab-pal",
          "podcast_title": "249 - Anuvab Pal"
        },
        {
          "name": "Ben Target: Splosh!",
          "group_name": "Plosive Productions / Heroes / PWYW",
          "times": "15:45",
          "event_url": "whats-on/ben-target-splosh",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/247-ben-target",
          "podcast_title": "247 - Ben Target"
        },
        {
          "name": "Anna Mann's Late Night Cheese and Sex Party",
          "group_name": "Berk's Nest and Colin Hoult",
          "times": "23:00",
          "event_url": "whats-on/anna-mann-s-late-night-cheese-and-sex-party",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/235-colin-hoult",
          "podcast_title": "235 - Colin Hoult"
        },
        {
          "name": "Jess Robinson: No Filter",
          "group_name": "Live Nation by arrangement with TROIKA",
          "times": "20:30",
          "event_url": "whats-on/jess-robinson-no-filter",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/231-jess-robinson",
          "podcast_title": "231 - Jess Robinson"
        },
        {
          "name": "Reginald D Hunter: An American Facing the Beast and Niggas",
          "group_name": "Mick Perrin Worldwide",
          "times": "20:30",
          "event_url": "whats-on/reginald-d-hunter-an-american-facing-the-beast-and-niggas",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/225-reginald-d-hunter",
          "podcast_title": "225 - Reginald D Hunter"
        },
        {
          "name": "Jo Caulfield: Killing Time",
          "group_name": "Jo Caulfield / The Stand Comedy Club",
          "times": "19:40",
          "event_url": "whats-on/jo-caulfield-killing-time",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/223-jo-caulfield",
          "podcast_title": "223 - Jo Caulfield"
        },
        {
          "name": "Simon Munnery: The Wreath ",
          "group_name": "Show And Tell / The Stand Comedy Club ",
          "times": "15:20",
          "event_url": "whats-on/simon-munnery-the-wreath",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/213-simon-munnery",
          "podcast_title": "213 - Simon Munnery"
        },
        {
          "name": "Barry Cryer and Ronnie Golden: Historical Objects",
          "group_name": "Gilded Balloon and Steve Ullathorne present...",
          "times": "15:00, 16:30",
          "event_url": "whats-on/barry-cryer-and-ronnie-golden-historical-objects",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/211-barry-cryer",
          "podcast_title": "211 - Barry Cryer"
        },
        {
          "name": "Ed Gamble: Blizzard",
          "group_name": "Avalon Promotions",
          "times": "19:40",
          "event_url": "whats-on/ed-gamble-blizzard",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/209-ed-gamble-live-at-stonefree-festival",
          "podcast_title": "209 - Ed Gamble (Live At Stonefree Festival)"
        },
        {
          "name": "Lost Voice Guy: Inspiration Porn",
          "group_name": "Lee Martin for Gag Reflex in association with Andrew Roach",
          "times": "16:00",
          "event_url": "whats-on/lost-voice-guy-inspiration-porn",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/206-lost-voice-guy-aka-lee-ridley",
          "podcast_title": "206 - Lost Voice Guy (AKA Lee Ridley)"
        },
        {
          "name": "Rhys Nicholson – Seminal",
          "group_name": "Underbelly and Phil McIntyre Management",
          "times": "21:05",
          "event_url": "whats-on/rhys-nicholson-seminal",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/205-rhys-nicholson",
          "podcast_title": "205 - Rhys Nicholson"
        },
        {
          "name": "Hannah Gadsby – No Bones About It",
          "group_name": "Hannah Gadsby",
          "times": "17:00",
          "event_url": "whats-on/hannah-gadsby-no-bones-about-it",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/202-hannah-gadsby-live-at-melbourne-comedy-festival",
          "podcast_title": "202 - Hannah Gadsby (Live At Melbourne Comedy Festival)"
        },
        {
          "name": "Rachel Parris' Musical Comedy Club",
          "group_name": "Live Nation in association with Troika",
          "times": "23:20",
          "event_url": "whats-on/rachel-parris-musical-comedy-club",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/196-rachel-parris",
          "podcast_title": "196 - Rachel Parris"
        },
        {
          "name": "Angela Barnes: Rose-Tinted",
          "group_name": "Off The Kerb Productions Ltd",
          "times": "19:15",
          "event_url": "whats-on/angela-barnes-rose-tinted",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/193-angela-barnes",
          "podcast_title": "193 - Angela Barnes"
        },
        {
          "name": "Paul Currie: Hot Donkey",
          "group_name": "Paul Victor Currie / Heroes",
          "times": "20:40",
          "event_url": "whats-on/paul-currie-hot-donkey",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/183-paul-currie",
          "podcast_title": "183 - Paul Currie"
        },
        {
          "name": "Russell Howard – Work in Progress",
          "group_name": "Avalon Promotions Ltd",
          "times": "18:35",
          "event_url": "whats-on/russell-howard-work-in-progress",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/170-russell-howard",
          "podcast_title": "170 - Russell Howard"
        },
        {
          "name": "Seymour Mace Gets Sucked Off by God",
          "group_name": "Seymour Mace / The Stand Comedy Club",
          "times": "13:30",
          "event_url": "whats-on/seymour-mace-gets-sucked-off-by-god",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/167-seymour-mace",
          "podcast_title": "167 - Seymour Mace"
        },
        {
          "name": "Abigoliah Schamaun: Do You Know Who I Think I Am?!",
          "group_name": "Troll Productions",
          "times": "21:00",
          "event_url": "whats-on/abigoliah-schamaun-do-you-know-who-i-think-i-am",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-166-abigoliah-schamaun",
          "podcast_title": "CCP 166 - Abigoliah Schamaun"
        },
        {
          "name": "Tania Edwards: Not My Dog",
          "group_name": "Tania Edwards",
          "times": "15:15",
          "event_url": "whats-on/tania-edwards-not-my-dog",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp162",
          "podcast_title": "CCP162 - Tania Edwards"
        },
        {
          "name": "Daniel Sloss: X",
          "group_name": "MZA and Get Slossed Productions",
          "times": "19:00",
          "event_url": "whats-on/daniel-sloss-x",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp151-daniel-sloss-live-at-the-edinburgh-fringe",
          "podcast_title": "CCP152 - Daniel Sloss (Live at the Edinburgh Fringe)"
        },
        {
          "name": "Jason Byrne: You Can Come in, But Don't Start Anything",
          "group_name": "Phil McIntyre Entertainments by arrangement with Lisa Thomas Management",
          "times": "21:00",
          "event_url": "whats-on/jason-byrne-you-can-come-in-but-don-t-start-anything",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp147-jason-byrne-live-at-the-edinburgh-fringe",
          "podcast_title": "CCP147 - Jason Byrne (Live at the Edinburgh Fringe)"
        },
        {
          "name": "Justin Moorhouse: Northern Joker",
          "group_name": "CKP and InterTalent Group present",
          "times": "19:00",
          "event_url": "whats-on/justin-moorhouse-northern-joker",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp136-justin-moorhouse",
          "podcast_title": "CCP136 - Justin Moorhouse"
        },
        {
          "name": "Charlie Baker Presents: The Greatest Goat of All Time",
          "group_name": "Off the Kerb Productions Ltd.",
          "times": "15:00",
          "event_url": "whats-on/charlie-baker-presents-the-greatest-goat-of-all-time",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp135-charlie-baker-live-at-latitude-festival",
          "podcast_title": "CCP135 - Charlie Baker (Live at Latitude Festival)"
        },
        {
          "name": "Daliso Chaponda: What the African Said",
          "group_name": "Professor Jonathan Shalit OBE, InterTalent Comedy and Live Nation present",
          "times": "19:30",
          "event_url": "whats-on/daliso-chaponda-what-the-african-said",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp128-daliso-chaponda-live-at-darlington-comedy-festival",
          "podcast_title": "CCP128 - Daliso Chaponda (Live at Darlington Comedy Festival)"
        },
        {
          "name": "Gavin Webster: I Am Stand-Up Comedy",
          "group_name": "Gavin Webster / The Stand Comedy Club",
          "times": "18:20",
          "event_url": "whats-on/gavin-webster-i-am-stand-up-comedy",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp127-gavin-webster-live",
          "podcast_title": "CCP127 - Gavin Webster (Live)"
        },
        {
          "name": "Zoe Lyons: Entry Level Human",
          "group_name": "CKP and InterTalent Group present",
          "times": "17:45",
          "event_url": "whats-on/zoe-lyons-entry-level-human",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp122-zoe-lyons",
          "podcast_title": "CCP122 - Zoe Lyons"
        },
        {
          "name": "Mitch Benn: Doing It on Purpose ",
          "group_name": "Mitch Benn / IMWP",
          "times": "15:25",
          "event_url": "whats-on/mitch-benn-doing-it-on-purpose",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp121-mitch-benn-live",
          "podcast_title": "CCP121 - Mitch Benn (Live)"
        },
        {
          "name": "Mark Watson: The Infinite Show",
          "group_name": "Impatient Productions",
          "times": "19:00",
          "event_url": "whats-on/mark-watson-the-infinite-show",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp120-mark-watson-live",
          "podcast_title": "CCP120 - Mark Watson (Live)"
        },
        {
          "name": "Nina Conti Is Monkey",
          "group_name": "PBJ Management",
          "times": "19:00",
          "event_url": "whats-on/nina-conti-is-monkey",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp119-nina-conti-live",
          "podcast_title": "CCP119 - Nina Conti (Live)"
        },
        {
          "name": "Mr. Swallow and the Vanishing Elephant",
          "group_name": "The Pleasance, Nick Mohammed and United Agents",
          "times": "19:30",
          "event_url": "whats-on/mr-swallow-and-the-vanishing-elephant",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp117-nick-mohammed",
          "podcast_title": "CCP117 - Nick Mohammed"
        },
        {
          "name": "Tim Key: Megadate",
          "group_name": "PBJ Management",
          "times": "23:15",
          "event_url": "whats-on/tim-key-megadate",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp113-tim-key-part-one-of-two",
          "podcast_title": "CCP113 - Tim Key (Part One of Two)"
        },
        {
          "name": "Brendon Burns and Colt Cabana Do Comedy and Commentary to Bad Wrestling Matches",
          "group_name": "Brendon Burns and Colt Cabana / Heroes",
          "times": "23:00",
          "event_url": "whats-on/brendon-burns-and-colt-cabana-do-comedy-and-commentary-to-bad-wrestling-matches",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp111-brendon-burns",
          "podcast_title": "CCP111 - Brendon Burns"
        },
        {
          "name": "Lou Sanders: Shame Pig",
          "group_name": "Plosive Productions in association with Avalon / Heroes / PWYW",
          "times": "12:30",
          "event_url": "whats-on/lou-sanders-shame-pig",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp110-lou-sanders",
          "podcast_title": "CCP110 - Lou Sanders"
        },
        {
          "name": "Alfie Brown: Lunatic ",
          "group_name": "IAM Present ",
          "times": "21:30",
          "event_url": "whats-on/alfie-brown-lunatic",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp104-alfie-brown",
          "podcast_title": "CCP104 - Alfie Brown"
        },
        {
          "name": "Nish Kumar: It's in Your Nature to Destroy Yourselves (Work in Progress)",
          "group_name": "Nish Kumar / Phil McIntyre / Heroes",
          "times": "16:30",
          "event_url": "whats-on/nish-kumar-it-s-in-your-nature-to-destroy-yourselves-work-in-progress",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp101-nish-kumar",
          "podcast_title": "CCP101 - Nish Kumar"
        },
        {
          "name": "Phil Kay: Songer-Singwriter",
          "group_name": "Phil Kay / Heroes",
          "times": "19:40",
          "event_url": "whats-on/phil-kay-songer-singwriter",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp100-phil-kay-live",
          "podcast_title": "CCP100 - Phil Kay (Live)"
        },
        {
          "name": "Luisa Omielan: Politics for Bitches",
          "group_name": "CatFace Talent",
          "times": "21:00",
          "event_url": "whats-on/luisa-omielan-politics-for-bitches",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp99-luisa-omielan",
          "podcast_title": "CCP99 - Luisa Omielan"
        },
        {
          "name": "Eleanor Tiernan: Success Without a Sex Tape",
          "group_name": "Eleanor Tiernan / PBH's Free Fringe",
          "times": "13:40",
          "event_url": "whats-on/eleanor-tiernan-success-without-a-sex-tape",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-93-eleanor-tiernan",
          "podcast_title": "CCP93 Eleanor Tiernan"
        },
        {
          "name": "Tom Stade: I Swear To...",
          "group_name": "Blue Jeans Management presents",
          "times": "21:15",
          "event_url": "whats-on/tom-stade-i-swear-to",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-94-tom-stade-live",
          "podcast_title": "CCP94 - Tom Stade (Live)"
        },
        {
          "name": "Steen Raskopoulos: Stay",
          "group_name": "Underbelly with Token Events and Dawn Sedgwick Management",
          "times": "20:00",
          "event_url": "whats-on/steen-raskopoulos-stay",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-91-steen-raskopoulos",
          "podcast_title": "CCP EP 91 - Steen Raskopoulos"
        },
        {
          "name": "Phill Jupitus: Sassy Knack",
          "group_name": "Off The Kerb Productions Ltd / The Stand Comedy Club",
          "times": "16:30",
          "event_url": "whats-on/phill-jupitus-sassy-knack",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-89-phill-jupitus-live",
          "podcast_title": "CCP Ep 89 - Phill Jupitus (Live)"
        },
        {
          "name": "John Hastings: Float Like a Butterfly, John Hastings Like a Bee",
          "group_name": "Brett Vincent for Get Comedy",
          "times": "20:30",
          "event_url": "whats-on/john-hastings-float-like-a-butterfly-john-hastings-like-a-bee",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-87-john-hastings",
          "podcast_title": "CCP Ep 87 - John Hastings"
        },
        {
          "name": "Nick Doody: PG",
          "group_name": "Nick Doody / PBH's Free Fringe",
          "times": "19:30",
          "event_url": "whats-on/nick-doody-pg",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-84-nick-doody",
          "podcast_title": "CCP Ep 84 - Nick Doody"
        },
        {
          "name": "Andy Zaltzman: Right Questions. Wrong Answers.",
          "group_name": "Andy Zaltzman",
          "times": "15:00",
          "event_url": "whats-on/andy-zaltzman-right-questions-wrong-answers",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-82-andy-zaltzman",
          "podcast_title": "CCP Ep 82 - Andy Zaltzman"
        },
        {
          "name": "Jarred Christmas: Remarkably Average",
          "group_name": "Gilded Balloon and Blue Jeans Management present...",
          "times": "20:00",
          "event_url": "whats-on/jarred-christmas-remarkably-average",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-80-jarred-christmas",
          "podcast_title": "CCP Ep 80 - Jarred Christmas"
        },
        {
          "name": "Carey Carey Quite Contrary",
          "group_name": "Carey Marx / PBH's Free Fringe",
          "times": "17:15",
          "event_url": "whats-on/carey-carey-quite-contrary",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-75-carey-marx-live-at",
          "podcast_title": "CCP Ep 75 - Carey Marx (Live at The New Zealand International Comedy Festival)"
        },
        {
          "name": "Max and Ivan's Prom Night",
          "group_name": "Max and Ivan / Assembly / Dawn Sedgwick Management",
          "times": "21:00",
          "event_url": "whats-on/max-and-ivan-s-prom-night",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-73-max-and-ivan-live",
          "podcast_title": "CCP Ep 73 - Max and Ivan (Live)"
        },
        {
          "name": "David O'Doherty: You Have to Laugh",
          "group_name": "Lisa Richards in association with Chambers Management",
          "times": "19:30",
          "event_url": "whats-on/david-o-doherty-you-have-to-laugh",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-72-david-odoherty-live",
          "podcast_title": "CCP Ep 72 - David O'Doherty (Live)"
        },
        {
          "name": "Gary Delaney: Gagster's Paradise",
          "group_name": "CKP, Impatient and InterTalent Group present",
          "times": "21:20",
          "event_url": "whats-on/gary-delaney-gagster-s-paradise",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp67",
          "podcast_title": "CCP Ep 67 - Gary Delaney (Live in Wolverhampton)"
        },
        {
          "name": "Tony Law: A Lost Show",
          "group_name": "Rabbit Rabbit / CKP / Heroes",
          "times": "15:00",
          "event_url": "whats-on/tony-law-a-lost-show",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-64-tony-law-live",
          "podcast_title": "CCP Ep 64 - Tony Law (Live)"
        },
        {
          "name": "Marcus Brigstocke: Devil May Care",
          "group_name": "Off The Kerb Productions Ltd",
          "times": "18:30",
          "event_url": "whats-on/marcus-brigstocke-devil-may-care",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-63-marcus-brigstocke",
          "podcast_title": "CCP Ep 63 - Marcus Brigstocke (Live)"
        },
        {
          "name": "Andrew Maxwell: Shake a Leg",
          "group_name": "Get Comedy by arrangement with CKP and Intertalent Group",
          "times": "21:00",
          "event_url": "whats-on/andrew-maxwell-shake-a-leg",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-56-andrew-maxwell-live",
          "podcast_title": "CCP Ep 56 - Andrew Maxwell (Live)"
        },
        {
          "name": "David Baddiel's AniMalcolm",
          "group_name": "Story Pocket Theatre",
          "times": "11:30",
          "event_url": "whats-on/david-baddiel-s-animalcolm",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-54-david-baddiel-live",
          "podcast_title": "CCP Ep 54 - David Baddiel (Live)"
        },
        {
          "name": "Phil Nichol: Your Wronger",
          "group_name": "Phil Nichol / Heroes",
          "times": "21:00",
          "event_url": "whats-on/phil-nichol-your-wronger",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-51-phil-nichol-live",
          "podcast_title": "CCP Ep 51 - Phil Nichol (Live)"
        },
        {
          "name": "Hal Cruttenden: Chubster",
          "group_name": "CKP and InterTalent Group present",
          "times": "21:00",
          "event_url": "whats-on/hal-cruttenden-chubster",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-49-hal-cruttenden-live",
          "podcast_title": "CCP Ep 49 - Hal Cruttenden (Live)"
        },
        {
          "name": "Brendon Burns and Colt Cabana Do Comedy and Commentary to Bad Wrestling Matches",
          "group_name": "Brendon Burns and Colt Cabana / Heroes",
          "times": "23:00",
          "event_url": "whats-on/brendon-burns-and-colt-cabana-do-comedy-and-commentary-to-bad-wrestling-matches",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-47-brendon-burns-live",
          "podcast_title": "CCP Ep 47 - Brendon Burns (Live)"
        },
        {
          "name": "Milo McCabe: 1001 Moments With Troy Hawke!",
          "group_name": "Milo McCabe",
          "times": "19:00",
          "event_url": "whats-on/milo-mccabe-1001-moments-with-troy-hawke",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-44-milo-mccabe",
          "podcast_title": "CCP Ep 44 - Milo McCabe"
        },
        {
          "name": "Felicity Ward: Busting a Nut",
          "group_name": "Phil McIntyre Entertainments presents",
          "times": "21:00",
          "event_url": "whats-on/felicity-ward-busting-a-nut",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-39-felicity-ward",
          "podcast_title": "CCP Ep 39 - Felicity Ward"
        },
        {
          "name": "Strictly Carl Donnelly!",
          "group_name": "Carl Donnelly",
          "times": "18:45",
          "event_url": "whats-on/strictly-carl-donnelly",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-32-carl-donnelly",
          "podcast_title": "CCP Ep 32 - Carl Donnelly"
        },
        {
          "name": "Rob Rouse",
          "group_name": "Rob Rouse",
          "times": "18:30",
          "event_url": "whats-on/rob-rouse",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-27-rob-rouse",
          "podcast_title": "CCP Ep 27 - Rob Rouse"
        },
        {
          "name": "Terry Alderton: The Musical",
          "group_name": "Brett Vincent for Get Comedy in association with Dabster Productions",
          "times": "18:30",
          "event_url": "whats-on/terry-alderton-the-musical",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep25-terry-alderton-live",
          "podcast_title": "CCP Ep25 - Terry Alderton (Live)"
        },
        {
          "name": "Abandoman (AKA Rob Broderick) – Pirate Radio",
          "group_name": "Underbelly in association with Dawn Sedgwick Management",
          "times": "21:30",
          "event_url": "whats-on/abandoman-aka-rob-broderick-pirate-radio",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-22-abandoman-live",
          "podcast_title": "CCP Ep 22 - Abandoman (Live)"
        },
        {
          "name": "Fred MacAulay in Conversation",
          "group_name": "Gilded Balloon and Fred MacAulay present...",
          "times": "12:00, 13:30",
          "event_url": "whats-on/fred-macaulay-in-conversation",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-13-fred-macaulay",
          "podcast_title": "CCP Ep 13 - Fred MacAulay (Live)"
        },
        {
          "name": "Alun Cochrane: You. Me. Now.",
          "group_name": "Alun Cochrane / The Stand Comedy Club",
          "times": "21:40",
          "event_url": "whats-on/alun-cochrane-you-me-now",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-9-alun-cochrane",
          "podcast_title": "CCP Ep 9 - Alun Cochrane"
        },
        {
          "name": "Arthur Smith: Syd",
          "group_name": "Arthur Smith",
          "times": "16:10",
          "event_url": "whats-on/arthur-smith-syd",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-8-arthur-smith",
          "podcast_title": "CCP Ep 8 - Arthur Smith"
        },
        {
          "name": "Paul Sinha: The Two Ages of Man",
          "group_name": "Paul Sinha / The Stand Comedy Club",
          "times": "16:55",
          "event_url": "whats-on/paul-sinha-the-two-ages-of-man",
          "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep5-paul-sinha",
          "podcast_title": "CCP Ep5 - Paul Sinha"
        }
      ];
  });
