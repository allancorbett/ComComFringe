'use strict';

/**
 * @ngdoc function
 * @name comcompodOnTheFringeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comcompodOnTheFringeApp
 */
angular.module('comcompodOnTheFringeApp')
  .controller('MainCtrl', function () {

    this.shows = [
      {
        "name": "Stuart Goldsmith: Compared To What",
        "times": "15:45",
        "event_url": "/whats-on/stuart-goldsmith-compared-to-what",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/"
      },
      {
        "name": "Wendy Wason: Tiny Me",
        "group_name": "Bound & Gagged Comedy in association with Vivienne Clore",
        "times": "18:45",
        "event_url": "whats-on/wendy-wason-tiny-me",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/174-wendy-wason",
        "podcast_title": "174 - Wendy Wason"
      },
      {
        "name": "Shappi Khorsandi: Oh My Country! From Morris Dancing to Morrissey",
        "group_name": "Shappi Khorsandi / Off The Kerb Productions",
        "times": "20:30",
        "event_url": "whats-on/shappi-khorsandi-oh-my-country-from-morris-dancing-to-morrissey",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-171-shappi-korsandi",
        "podcast_title": "CCP 171 - Shappi Khorsandi"
      },
      {
        "name": "Russell Howard and Steve Williams Work in Progress",
        "group_name": "Avalon",
        "times": "18:40",
        "event_url": "whats-on/russell-howard-and-steve-williams-work-in-progress",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/170-russell-howard",
        "podcast_title": "170 - Russell Howard"
      },
      {
        "name": "Joe Lycett: That's the Way A-Ha A-Ha, Joe Lycett",
        "group_name": "Chambers Touring Ltd",
        "times": "22:30",
        "event_url": "whats-on/joe-lycett-that-s-the-way-a-ha-a-ha-joe-lycett",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-168",
        "podcast_title": "168 - Joe Lycett (Live at Machynlleth Comedy Festival)"
      },
      {
        "name": "Seymour Mace: Shit Title",
        "group_name": "Seymour Mace",
        "times": "14:30",
        "event_url": "whats-on/seymour-mace-shit-title",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/167-seymour-mace",
        "podcast_title": "167 - Seymour Mace"
      },
      {
        "name": "Mark Steel's in Toon",
        "group_name": "Off The Kerb Productions",
        "times": "21:30",
        "event_url": "whats-on/mark-steel-s-in-toon",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp154-mark-steel-live-at-the-edinburgh-fringe",
        "podcast_title": "CCP154 - Mark Steel (Live at the Edinburgh Fringe)"
      },
      {
        "name": "Daniel Sloss: So?",
        "group_name": "MZA and Get Slossed Productions",
        "times": "20:40",
        "event_url": "whats-on/daniel-sloss-so",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp151-daniel-sloss-live-at-the-edinburgh-fringe",
        "podcast_title": "CCP152 - Daniel Sloss (Live at the Edinburgh Fringe)"
      },
      {
        "name": "Jason Byrne is Propped Up",
        "group_name": "Phil McIntyre Entertainments by arrangement with Lisa Thomas Management ",
        "times": "21:00",
        "event_url": "whats-on/jason-byrne-is-propped-up",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp147-jason-byrne-live-at-the-edinburgh-fringe",
        "podcast_title": "CCP147 - Jason Byrne (Live at the Edinburgh Fringe)"
      },
      {
        "name": "Joel Dommett: Pretending to Smoke With a Breadstick",
        "group_name": "Off The Kerb Productions",
        "times": "18:00",
        "event_url": "whats-on/joel-dommett-pretending-to-smoke-with-a-breadstick",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp142-joel-dommett-live-at-the-edinburgh-fringe",
        "podcast_title": "CCP142 - Joel Dommett (Live at the Edinburgh Fringe)"
      },
      {
        "name": "Mae Martin: Work in Progress",
        "group_name": "Mae Martin",
        "times": "21:15",
        "event_url": "whats-on/mae-martin-work-in-progress",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp140-mae-martin-live-at-the-edinburgh-fringe",
        "podcast_title": "CCP140 - Mae Martin (Live at the Edinburgh Fringe)"
      },
      {
        "name": "Tommy Tiernan: Out of the Whirlwind",
        "group_name": "Mick Perrin Worldwide",
        "times": "19:30",
        "event_url": "whats-on/tommy-tiernan-out-of-the-whirlwind",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp139-tommy-tiernan-live-at-the-edinburgh-fringe",
        "podcast_title": "CCP139 - Tommy Tiernan (Live at the Edinburgh Fringe)"
      },
      {
        "name": "Katherine Ryan: Work in Progress",
        "group_name": "Live Nation",
        "times": "16:05",
        "event_url": "whats-on/katherine-ryan-work-in-progress",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp137-katherine-ryan-live-at-the-edinburgh-fringe",
        "podcast_title": "CCP137 - Katherine Ryan (Live at the Edinburgh Fringe)"
      },
      {
        "name": "Justin Moorhouse: People and Feelings",
        "group_name": "CKP",
        "times": "20:15",
        "event_url": "whats-on/justin-moorhouse-people-and-feelings",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp136-justin-moorhouse",
        "podcast_title": "CCP136 - Justin Moorhouse"
      },
      {
        "name": "George Egg: Anarchist Cook",
        "group_name": "George Egg",
        "times": "15:00, 17:45, 21:30",
        "event_url": "whats-on/george-egg-anarchist-cook",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp130-george-egg",
        "podcast_title": "CCP130 - George Egg"
      },
      {
        "name": "Gavin Webster: Jesus Christ's a Window Cleaner Now",
        "group_name": "Gavin Webster",
        "times": "19:10",
        "event_url": "whats-on/gavin-webster-jesus-christ-s-a-window-cleaner-now",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp127-gavin-webster-live",
        "podcast_title": "CCP127 - Gavin Webster (Live)"
      },
      {
        "name": "Nazeem Hussain – Legally Brown",
        "group_name": "Nazeem Hussain",
        "times": "20:00",
        "event_url": "whats-on/nazeem-hussain-legally-brown",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp126-nazeem-hussain",
        "podcast_title": "CCP126 - Nazeem Hussain"
      },
      {
        "name": "Zoe Lyons: Little Misfit",
        "group_name": "CKP",
        "times": "19:00, 22:45",
        "event_url": "whats-on/zoe-lyons-little-misfit",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp122-zoe-lyons",
        "podcast_title": "CCP122 - Zoe Lyons"
      },
      {
        "name": "Mitch Benn: Don't Fear the Reaper ",
        "group_name": "Mitch Benn",
        "times": "14:50",
        "event_url": "whats-on/mitch-benn-don-t-fear-the-reaper",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp121-mitch-benn-live",
        "podcast_title": "CCP121 - Mitch Benn (Live)"
      },
      {
        "name": "Mark Watson's Edinborolympics",
        "group_name": "Impatient Productions",
        "times": "23:00",
        "event_url": "whats-on/mark-watson-s-edinborolympics",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp120-mark-watson-live",
        "podcast_title": "CCP120 - Mark Watson (Live)"
      },
      {
        "name": "Nina Conti: In Your Face",
        "group_name": "PBJ Management",
        "times": "20:00",
        "event_url": "whats-on/nina-conti-in-your-face",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp119-nina-conti-live",
        "podcast_title": "CCP119 - Nina Conti (Live)"
      },
      {
        "name": "Mr Swallow – Houdini",
        "group_name": "The Pleasance, Nick Mohammed and United Agents",
        "times": "19:00",
        "event_url": "whats-on/mr-swallow-houdini",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp117-nick-mohammed",
        "podcast_title": "CCP117 - Nick Mohammed"
      },
      {
        "name": "Des Bishop: Grey Matters",
        "group_name": "Off The Kerb Productions by arrangement with Lisa Richards Agency",
        "times": "20:00",
        "event_url": "whats-on/des-bishop-grey-matters",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp116-des-bishop-live",
        "podcast_title": "CCP116 - Des Bishop (Live)"
      },
      {
        "name": "John Gordillo: Love Capitalism",
        "group_name": "John Gordillo",
        "times": "16:50",
        "event_url": "whats-on/john-gordillo-love-capitalism",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp114-john-gordillo-part-one-of-two",
        "podcast_title": "CCP114 - John Gordillo (Part One of Two)"
      },
      {
        "name": "Liz Miele: Mind Over Melee",
        "group_name": "Liz Miele",
        "times": "18:40",
        "event_url": "whats-on/liz-miele-mind-over-melee",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp112-liz-miele",
        "podcast_title": "CCP112 - Liz Miele"
      },
      {
        "name": "Lou Sanders: What's That Lady Doing?",
        "group_name": "Berk's Nest and the Pleasance",
        "times": "20:10",
        "event_url": "whats-on/lou-sanders-what-s-that-lady-doing",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp110-lou-sanders",
        "podcast_title": "CCP110 - Lou Sanders"
      },
      {
        "name": "Thom: Foolery With Thom Tuck",
        "group_name": "Thom Tuck / Heroes of Fringe (PWYW)",
        "times": "15:00",
        "event_url": "whats-on/thom-foolery-with-thom-tuck",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp106-thom-tuck",
        "podcast_title": "CCP106 - Thom Tuck"
      },
      {
        "name": "Alfie Brown: Scissor ",
        "group_name": "Chris Quaile for Get Comedy",
        "times": "15:00",
        "event_url": "whats-on/alfie-brown-scissor",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp104-alfie-brown",
        "podcast_title": "CCP104 - Alfie Brown"
      },
      {
        "name": "Nish Kumar: Actions Speak Louder Than Words, Unless You Shout the Words Real Loud",
        "group_name": "Phil McIntyre Entertainments",
        "times": "20:00",
        "event_url": "whats-on/nish-kumar-actions-speak-louder-than-words-unless-you-shout-the-words-real-loud",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp101-nish-kumar",
        "podcast_title": "CCP101 - Nish Kumar"
      },
      {
        "name": "Phil Kay: Laugh & Death",
        "group_name": "Heroes of Fringe (PWYW)",
        "times": "19:00",
        "event_url": "whats-on/phil-kay-laugh-death",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp100-phil-kay-live",
        "podcast_title": "CCP100 - Phil Kay (Live)"
      },
      {
        "name": "Luisa Omielan – What Would Beyoncé Do?!",
        "group_name": "CatFace Talent and Big Love Productions",
        "times": "21:30",
        "event_url": "whats-on/luisa-omielan-what-would-beyonce-do",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp99-luisa-omielan",
        "podcast_title": "CCP99 - Luisa Omielan"
      },
      {
        "name": "Josie Long: Work In Progress ",
        "group_name": "Show And Tell ",
        "times": "17:30",
        "event_url": "whats-on/josie-long-work-in-progress",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-92-josie-long-live",
        "podcast_title": "CCP Ep 92 - Josie Long (Live)"
      },
      {
        "name": "Steen Raskopoulos – You Know the Drill",
        "group_name": "Underbelly Productions with Token Events and Dawn Sedgwick Management",
        "times": "19:40",
        "event_url": "whats-on/steen-raskopoulos-you-know-the-drill",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-91-steen-raskopoulos",
        "podcast_title": "CCP EP 91 - Steen Raskopoulos"
      },
      {
        "name": "Bridget Christie: Mortal",
        "group_name": "Bridget Christie",
        "times": "11:00",
        "event_url": "whats-on/bridget-christie-mortal",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-90-bridget-christie-live",
        "podcast_title": "CCP Ep 90 - Bridget Christie (Live)"
      },
      {
        "name": "Sam Simmons: Not a People Person",
        "group_name": "Soho Theatre, Token Events, Mason Sisters @ PBJ, Underbelly",
        "times": "20:15",
        "event_url": "whats-on/sam-simmons-not-a-people-person",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-88-sam-simmons",
        "podcast_title": "CCP Ep 88 - Sam Simmons"
      },
      {
        "name": "John Hastings: Integrity",
        "group_name": "Mick Perrin Worldwide in association with EMX Management",
        "times": "21:30",
        "event_url": "whats-on/john-hastings-integrity",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-87-john-hastings",
        "podcast_title": "CCP Ep 87 - John Hastings"
      },
      {
        "name": "Andy Zaltzman: Plan Z",
        "group_name": "Andy Zaltzman",
        "times": "15:40",
        "event_url": "whats-on/andy-zaltzman-plan-z",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-82-andy-zaltzman",
        "podcast_title": "CCP Ep 82 - Andy Zaltzman"
      },
      {
        "name": "Carey Marx, Hero of the People",
        "group_name": "Carey Marx / PBH's Free Fringe",
        "times": "17:00",
        "event_url": "whats-on/carey-marx-hero-of-the-people",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-75-carey-marx-live-at",
        "podcast_title": "CCP Ep 75 - Carey Marx (Live at The New Zealand International Comedy Festival)"
      },
      {
        "name": "David O'Doherty: Big Time",
        "group_name": "Lisa Richards in association with Chambers Management",
        "times": "19:30",
        "event_url": "whats-on/david-o-doherty-big-time",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-72-david-odoherty-live",
        "podcast_title": "CCP Ep 72 - David O'Doherty (Live)"
      },
      {
        "name": "Gary Delaney: There’s Something About Gary ",
        "group_name": "CKP",
        "times": "17:30",
        "event_url": "whats-on/gary-delaney-there-s-something-about-gary",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp67",
        "podcast_title": "CCP Ep 67 - Gary Delaney (Live in Wolverhampton)"
      },
      {
        "name": "Will Franken: Little Joe",
        "group_name": "Will Franken",
        "times": "22:35",
        "event_url": "whats-on/will-franken-little-joe",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-66-will-franken-live",
        "podcast_title": "CCP Ep 66 - Will Franken (Live)"
      },
      {
        "name": "Tony Law: A Law Undo His-elf What Welcome",
        "group_name": "Mick Perrin Worldwide",
        "times": "20:00",
        "event_url": "whats-on/tony-law-a-law-undo-his-elf-what-welcome",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-64-tony-law-live",
        "podcast_title": "CCP Ep 64 - Tony Law (Live)"
      },
      {
        "name": "Marcus Brigstocke: Why the Long Face?",
        "group_name": "Off The Kerb Productions",
        "times": "21:30",
        "event_url": "whats-on/marcus-brigstocke-why-the-long-face",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-63-marcus-brigstocke",
        "podcast_title": "CCP Ep 63 - Marcus Brigstocke (Live)"
      },
      {
        "name": "Norman Lovett: Entertaining Moaner",
        "group_name": "Heroes / Pay What You Want (PWYW)",
        "times": "18:00",
        "event_url": "whats-on/norman-lovett-entertaining-moaner",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-61-norman-lovett-live",
        "podcast_title": "CCP Ep 61 - Norman Lovett (Live)"
      },
      {
        "name": "Susan Calman: The Calman Before the Storm",
        "group_name": "The Pleasance and Susan Calman",
        "times": "18:20",
        "event_url": "whats-on/susan-calman-the-calman-before-the-storm",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-60-susan-calman-live",
        "podcast_title": "CCP Ep 60 - Susan Calman (Live)"
      },
      {
        "name": "Andrew Maxwell: Slight Return",
        "group_name": "Get Comedy",
        "times": "20:30",
        "event_url": "whats-on/andrew-maxwell-slight-return",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-56-andrew-maxwell-live",
        "podcast_title": "CCP Ep 56 - Andrew Maxwell (Live)"
      },
      {
        "name": "Al Murray – The Pub Landlord: Let's Go Backwards Together (Work in Progress)",
        "group_name": "Avalon",
        "times": "18:45",
        "event_url": "whats-on/al-murray-the-pub-landlord-let-s-go-backwards-together-work-in-progress",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-53-al-murray-live",
        "podcast_title": "CCP Ep 53 - Al Murray (Live)"
      },
      {
        "name": "Phil Nichol: Twenty",
        "group_name": "Brett Vincent for Get Comedy by arrangement with Glorious Management",
        "times": "21:45",
        "event_url": "whats-on/phil-nichol-twenty",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-51-phil-nichol-live",
        "podcast_title": "CCP Ep 51 - Phil Nichol (Live)"
      },
      {
        "name": "Hal Cruttenden: Straight Outta Cruttenden",
        "group_name": "CKP",
        "times": "22:00",
        "event_url": "whats-on/hal-cruttenden-straight-outta-cruttenden",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-49-hal-cruttenden-live",
        "podcast_title": "CCP Ep 49 - Hal Cruttenden (Live)"
      },
      {
        "name": "Brendon Burns and Colt Cabana Do Comedy and Commentary to Bad Wrestling Matches!",
        "group_name": "Brendon Burns and Colt Cabana / United Talent Agency",
        "times": "22:45",
        "event_url": "whats-on/brendon-burns-and-colt-cabana-do-comedy-and-commentary-to-bad-wrestling-matches",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-47-brendon-burns-live",
        "podcast_title": "CCP Ep 47 - Brendon Burns (Live)"
      },
      {
        "name": "Jarlath Regan – Arseways",
        "group_name": "Jarlath Regan",
        "times": "19:40",
        "event_url": "whats-on/jarlath-regan-arseways",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-45-jarlath-regan",
        "podcast_title": "CCP Ep 45 - Jarlath Regan"
      },
      {
        "name": "Milo McCabe: The Unflappable Troy Hawke",
        "group_name": "IMWP",
        "times": "20:00",
        "event_url": "whats-on/milo-mccabe-the-unflappable-troy-hawke",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-44-milo-mccabe",
        "podcast_title": "CCP Ep 44 - Milo McCabe"
      },
      {
        "name": "Tom Binns: Summertime Special 2016 With Ivan Brackenbury and Ian D Montfort",
        "group_name": "Sharon Burgess Productions",
        "times": "13:00",
        "event_url": "whats-on/tom-binns-summertime-special-2016-with-ivan-brackenbury-and-ian-d-montfort",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-42-tom-binns-ivan",
        "podcast_title": "CCP Ep 42 - Tom Binns (Ivan Brackenbury, Ian D Montfort)"
      },
      {
        "name": "Felicity Ward: 50% More Likely to Die",
        "group_name": "Brett Vincent for Get Comedy in association with Phil McIntyre",
        "times": "21:00",
        "event_url": "whats-on/felicity-ward-50-more-likely-to-die",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-39-felicity-ward",
        "podcast_title": "CCP Ep 39 - Felicity Ward"
      },
      {
        "name": "Tom Allen: Indeed",
        "group_name": "Off The Kerb Productions",
        "times": "20:15",
        "event_url": "whats-on/tom-allen-indeed",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-38-tom-allen",
        "podcast_title": "CCP Ep 38 - Tom Allen"
      },
      {
        "name": "David Quirk: Approaching Perfection",
        "group_name": "David Quirk / Heroes of Fringe (PWYW)",
        "times": "20:15",
        "event_url": "whats-on/david-quirk-approaching-perfection",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-36-david-quirk",
        "podcast_title": "CCP Ep 36 - David Quirk"
      },
      {
        "name": "Carl Donnelly: Bad Man Tings",
        "group_name": "Avalon Promotions Ltd",
        "times": "20:30",
        "event_url": "whats-on/carl-donnelly-bad-man-tings",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-32-carl-donnelly",
        "podcast_title": "CCP Ep 32 - Carl Donnelly"
      },
      {
        "name": "James Acaster: Reset",
        "group_name": "Phil McIntyre Entertainments",
        "times": "19:30",
        "event_url": "whats-on/james-acaster-reset",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-28-james-acaster-live",
        "podcast_title": "CCP Ep 28 - James Acaster (Live Special)"
      },
      {
        "name": "Abandoman: Life + Rhymes",
        "group_name": "Underbelly Productions by arrangement with Dawn Sedgwick Management",
        "times": "20:45",
        "event_url": "whats-on/abandoman-life-rhymes",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-22-abandoman-live",
        "podcast_title": "CCP Ep 22 - Abandoman (Live)"
      },
      {
        "name": "Fred MacAulay",
        "group_name": "Fred MacAulay / Gilded Balloon",
        "times": "19:30",
        "event_url": "whats-on/fred-macaulay",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-13-fred-macaulay",
        "podcast_title": "CCP Ep 13 - Fred MacAulay (Live)"
      },
      {
        "name": "Arthur Smith – Mindlessness: A Beginner's Guide",
        "group_name": "Mindlessness: A Beginner’s Guide",
        "times": "13:00",
        "event_url": "whats-on/arthur-smith-mindlessness-a-beginner-s-guide",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-8-arthur-smith",
        "podcast_title": "CCP Ep 8 - Arthur Smith"
      },
      {
        "name": "Leicester Comedy Festival Presents Best of That Other Fest With Sarah Millican & Special Guests",
        "group_name": "Leicester Comedy Festival",
        "times": "17:00",
        "event_url": "whats-on/leicester-comedy-festival-presents-best-of-that-other-fest-with-sarah-millican-special-guests",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-7-sarah-millican",
        "podcast_title": "CCP Ep 7 - Sarah Millican"
      },
      {
        "name": "Rob Deering's Beat This",
        "group_name": "Rob Deering",
        "times": "23:59",
        "event_url": "whats-on/rob-deering-s-beat-this",
        "podcast_url": "https://soundcloud.com/stu-goldsmith/the-comedians-comedian-podcast",
        "podcast_title": "CCP Ep 1 - Rob Deering"
      }
    ];

  });
