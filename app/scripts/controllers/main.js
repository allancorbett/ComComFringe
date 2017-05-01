'use strict';

/**
 * @ngdoc function
 * @name comcompodOnTheFringeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comcompodOnTheFringeApp
 */
angular.module('comcompodOnTheFringeApp')
    .controller('MainCtrl', function() {
        this.newshows = [{
                "name": "Hannah Gadsby – Nanette",
                "group_name": "Hannah Gadsby",
                "times": "17:30",
                "event_url": "whats-on/hannah-gadsby-nanette",
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
                "times": "19:00",
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
                "times": "18:40",
                "event_url": "whats-on/shappi-khorsandi-mistress-and-misfit",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-171-shappi-korsandi",
                "podcast_title": "CCP 171 - Shappi Khorsandi"
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
                "name": "Mae Martin: Dope",
                "group_name": "Show And Tell / Free Festival",
                "times": "20:00",
                "event_url": "whats-on/mae-martin-dope",
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
                "name": "Nazeem Hussain – Hussain In The Membrane",
                "group_name": "Nazeem Hussain",
                "times": "20:00",
                "event_url": "whats-on/nazeem-hussain-hussain-in-the-membrane",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp126-nazeem-hussain",
                "podcast_title": "CCP126 - Nazeem Hussain"
            },
            {
                "name": "Mark Watson: I'm Not Here",
                "group_name": "Impatient Productions Limited",
                "times": "23:20",
                "event_url": "whats-on/mark-watson-i-m-not-here",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp120-mark-watson-live",
                "podcast_title": "CCP120 - Mark Watson (Live)"
            },
            {
                "name": "Nina Conti: In Your Face",
                "group_name": "PBJ Management",
                "times": "19:15",
                "event_url": "whats-on/nina-conti-in-your-face",
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
                "name": "Brendon Burns and Craig Quartermaine in Race Off",
                "group_name": "Mick Perrin Worldwide",
                "times": "18:45",
                "event_url": "whats-on/brendon-burns-and-craig-quartermaine-in-race-off",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp111-brendon-burns",
                "podcast_title": "CCP111 - Brendon Burns"
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
                "name": "Luisa Omielan: The Interlude – Politics for Bitches/What Would Mary Magdalene Do?!",
                "group_name": "CatFace Talent",
                "times": "16:30",
                "event_url": "whats-on/luisa-omielan-the-interlude-politics-for-bitches-what-would-mary-magdalene-do",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp99-luisa-omielan",
                "podcast_title": "CCP99 - Luisa Omielan"
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
                "name": "John Hastings: Audacity",
                "group_name": "Mick Perrin Worldwide",
                "times": "21:15",
                "event_url": "whats-on/john-hastings-audacity",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-87-john-hastings",
                "podcast_title": "CCP Ep 87 - John Hastings"
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
                "name": "Richard Herring: Oh Frig, I'm 50!",
                "group_name": "Avalon Promotions Ltd",
                "times": "19:30",
                "event_url": "whats-on/richard-herring-oh-frig-i-m-50",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-46-richard-herring",
                "podcast_title": "CCP Ep 46 Richard Herring"
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
                "name": "James Acaster: The Trelogy",
                "group_name": "Phil McIntyre Entertainments",
                "times": "21:00",
                "event_url": "whats-on/james-acaster-the-trelogy",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-28-james-acaster-live",
                "podcast_title": "CCP Ep 28 - James Acaster (Live Special)"
            },
            {
                "name": "Abandoman's Rob Broderick – The Musical in My Mind",
                "group_name": "Assembly Festival in association with Dawn Sedgwick Management",
                "times": "18:00",
                "event_url": "whats-on/abandoman-s-rob-broderick-the-musical-in-my-mind",
                "podcast_url": "https://soundcloud.com/stu-goldsmith/ccp-ep-22-abandoman-live",
                "podcast_title": "CCP Ep 22 - Abandoman (Live)"
            }

        ];

    });
