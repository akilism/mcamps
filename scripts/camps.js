import { STATUS } from "./Status";
import dunkirk from "../assets/dunkirk-evictions.jpg";
import wetSick from "../assets/wet-sick-stuck.jpg";
import idomeni0 from "../assets/in-photos-inside-idomeni-camp.jpg";
import dispatch9 from "../assets/breaking-borders-dispatch-9.jpg";
import dispatch10 from "../assets/breaking-borders-dispatch-10.jpg";
import dispatch11 from "../assets/breaking-borders-dispatch-11.jpg";
import everyone from "../assets/everyone-will-make-it-one-day.jpg";
import calais from "../assets/jungle-lips.jpg";
import unrest from "../assets/macedonia-police-tear-gas-migrants-border-unrest.jpg";

/*
  * Article
  * {
  *   title: "",
  *   date: "",
  *   byLine: "",
  *   imageUrl: "",
  *   url: "",
  *   summary: ""
  * }
*/

/*
  * Photo
  * {
  *   series: "",
  *   date: "",
  *   byLine: "",
  *   url: "",
  *   caption: ""
  * }
*/

/*
  * Video
  * {
  *   title: "",
  *   date: "",
  *   byLine: "",
  *   imageUrl: "",
  *   url: "",
  *   summary: "",
  *   duration: ""
  * }
*/

export const camps = [
  { name: "Idomeni Camp",
    coords: { lat: 41.124358280561225, lng: 22.518914937973022 },
    location: "Idomeni, Kilkis, Greece",
    status: STATUS.ACTIVE,
    managedBy: "Greek Forces",
    population: {
      total: 4000,
      types: [{
          name: "Women",
          total: 1000
        },
        {
          name: "Children",
          total: 4000
        },
        {
          name: "Men",
          total: 3250
        }],
      origins: [{
        name: "Afganistan",
        total: 1500,
        distance: 4300
      },
      {
        name: "Iraq",
        total: 500,
        distance: 2300
      },
      {
        name: "Syria",
        total: 2000,
        distance: 1890
      }]
    },
    articles: [{
      title: "In Photos: Inside Greece's Idomeni Camp, Where 13,000 Migrants Are Stuck in Purgatory",
      date: "03-12-2016",
      byLine: "Harriet Salem",
      imageUrl: idomeni0,
      url: "https://news.vice.com/article/photos-inside-greeces-idomeni-camp-where-13000-migrants-are-stuck-in-purgatory",
      summary: "Thousands of people have been trapped in appalling conditions on Greece’s border with Macedonia since the the so-called Balkan Route to Western Europe was sealed off last week."
    },
    {
      title: "Wet, Sick, and Stuck: Thousands of Children Are Facing Deteriorating Conditions on Europe's Borders",
      date: "03-09-2016",
      byLine: "Harriet Salem",
      imageUrl: wetSick,
      url: "https://news.vice.com/article/wet-sick-and-stuck-thousands-of-children-are-facing-deteriorating-conditions-on-europes-borders",
      summary: ""
    },
    {
      title: "Migrants Are Being Tear-Gassed in Macedonia and France",
      date: "02-29-2016",
      byLine: "VICE News and Reuters",
      imageUrl: unrest,
      url: "https://news.vice.com/article/migrants-are-being-tear-gassed-in-macedonia-and-france",
      summary: "Police in Macedonia fired tear gas at hundreds of people who stormed the border from Greece and over 1,000 miles to the northwest clashes also broke out at a migrant camp in Calais, northern France."
    },
    {
      title: "We Visited the Lesser-Known French Migrant Camp That's Next in Line for Evictions",
      date: "04-04-2016",
      byLine: "Sally Hayden",
      imageUrl: dunkirk,
      url: "https://news.vice.com/article/we-visited-the-lesser-known-french-migrant-camp-thats-next-in-line-for-evictions-1",
      summary: "It's a decisive moment for Europe today as leaders meet with Turkey and try to finally nail down a deal in which Ankara will get billions of euros in return for stemming the flow of migrants."
    }],
    photos: [],
    videos: [{
      show: "Breaking Borders",
      title: "Greece's Impending Humanitarian Catastrophe: Breaking Borders (Dispatch 11)",
      date: "03-08-2016",
      byLine: "VICE News",
      imageUrl: dispatch11,
      url: "https://news.vice.com/video/greeces-impending-humanitarian-catastrophe-breaking-borders-dispatch-11",
      summary: "An emergency EU summit takes place today aimed at getting Turkey to help Europe stem the flow of migrants into the continent. The refugee crisis is reaching breaking point in Greece with tens of thousands of people trapped there and around 2,000 more arriving each day.",
      duration: "07:42"
    }],
    poly: [{ lat: 41.12515433884063, lng: 22.518040537834167 },
      { lat: 41.1237117286591, lng: 22.5184965133667 },
      { lat: 41.12352988478891, lng: 22.518593072891235 },
      { lat: 41.12348139300507, lng: 22.51893639564514 },
      { lat: 41.123493515954394, lng: 22.51911878585815 },
      { lat: 41.123477352021474, lng: 22.519580125808716 },
      { lat: 41.1248876401882, lng: 22.519628405570984 },
      { lat: 41.124936130932916, lng: 22.51944065093994 },
      { lat: 41.124980580750744, lng: 22.519301176071167 },
      { lat: 41.125210911142716, lng: 22.519301176071167 },
      { lat: 41.125267483396044, lng: 22.518909573554993 },
      { lat: 41.12518262499779, lng: 22.518094182014465 },
      { lat: 41.125174543239844, lng: 22.51799762248993 }]
  },
  { name: "Teteghem",
    coords: { lat: 51.018207, lng: 2.441253},
    location: "Teteghem, France",
    status: STATUS.CLOSED,
    managedBy: "Smugglers",
    population: {
      total: 0,
      origins: [],
      types: []
    },
    articles: [],
    photos: [],
    videos: [],
    poly: [{ lat: 51.018614311449404, lng: 2.4418455362319946 },
      { lat: 51.018533321385085, lng: 2.4418723583221436 },
      { lat: 51.01821273432554, lng: 2.4422800540924072 },
      { lat: 51.0181047466064, lng: 2.4422103166580196 },
      { lat: 51.01802375565201, lng: 2.441990375518799 },
      { lat: 51.017963012343394, lng: 2.4414002895355225 },
      { lat: 51.01790901822446, lng: 2.4410301446914673 },
      { lat: 51.01796976160384, lng: 2.4409067630767822 },
      { lat: 51.01811487046576, lng: 2.4408316612243652 },
      { lat: 51.01824310582622, lng: 2.44071364402771 },
      { lat: 51.018351093223124, lng: 2.4405956268310547 },
      { lat: 51.018448956584315, lng: 2.440692186355591 },
      { lat: 51.018486077115554, lng: 2.4411481618881226 },
      { lat: 51.01860081311516, lng: 2.4416685104370117 },
      { lat: 51.018624435197474, lng: 2.441786527633667 }]
  },
  { name: "Calais Jungle",
    coords: { lat: 50.973325, lng: 1.883172},
    location: "Calais, France",
    status: STATUS.CLOSED,
    managedBy: "NA",
    population: {
      total: 0,
      origins: [],
      types: []
    },
    articles: [{
      title: "Migrants Sew Their Lips Shut in Protest at Calais 'Jungle' Demolition",
      date: "03-02-2016",
      byLine: "Sally Hayden",
      imageUrl: calais,
      url: "https://news.vice.com/article/migrants-sew-their-lips-shut-in-protest-at-calais-jungle-demolition",
      summary: "As the violent demolition of a large section of the French migrant camp enters a third day, a group of Iranian men have sewn their lips shut in protest at how the camp's residents are being treated."
    },
    {
      title: "Migrants Are Being Tear-Gassed in Macedonia and France",
      date: "02-29-2016",
      byLine: "VICE News and Reuters",
      imageUrl: unrest,
      url: "https://news.vice.com/article/migrants-are-being-tear-gassed-in-macedonia-and-france",
      summary: "Police in Macedonia fired tear gas at hundreds of people who stormed the border from Greece and over 1,000 miles to the northwest clashes also broke out at a migrant camp in Calais, northern France."
    },
    {
      title: "'Everyone Will Make It One Day': Meeting the Calais Migrants Who Dream of England",
      date: "08-10-2015",
      byLine: "Sally Hayden",
      imageUrl: everyone,
      url: "https://news.vice.com/article/everyone-will-make-it-one-day-meeting-the-calais-migrants-who-dream-of-england",
      summary: "Hundreds of riot police moved into the Jungle yesterday, using tear gas and water cannons on migrants and dismantling shelters with chainsaws and mallets. NGOs say it's a humanitarian crisis."
    }],
    photos: [],
    videos: [{
      show: "Breaking Borders",
      title: "Protest Through Sewn Lips: Breaking Borders (Dispatch 10)",
      date: "03-03-2016",
      byLine: "VICE News",
      imageUrl: dispatch10,
      url: "https://news.vice.com/video/greeces-impending-humanitarian-catastrophe-breaking-borders-dispatch-11",
      summary: "As Europe continues to struggle with the worst refugee crisis since World War II, the minority of migrants aiming to make it as far as the UK often end up in camps in northern France, such as the now infamous \"Jungle\" in the port town of Calais.",
      duration: "05:02"
    }],
    poly: [{ lat: 50.97402814856588, lng: 1.8814945220947268 },
      { lat: 50.974217306496, lng: 1.8818914890289304 },
      { lat: 50.97441321925427, lng: 1.8824708461761477 },
      { lat: 50.974487530773956, lng: 1.8828141689300537 },
      { lat: 50.974487530773956, lng: 1.8830502033233643 },
      { lat: 50.97444024163883, lng: 1.883232593536377 },
      { lat: 50.97430512955881, lng: 1.8833720684051511 },
      { lat: 50.974048415523804, lng: 1.8833935260772703 },
      { lat: 50.97389979096019, lng: 1.8832969665527344 },
      { lat: 50.97381872281593, lng: 1.8833827972412107 },
      { lat: 50.97369712033417, lng: 1.8836295604705808 },
      { lat: 50.97356876181355, lng: 1.883833408355713 },
      { lat: 50.97341337997183, lng: 1.8840372562408447 },
      { lat: 50.97312963787593, lng: 1.8844342231750488 },
      { lat: 50.9729472313274, lng: 1.8846058845520017 },
      { lat: 50.97274455654437, lng: 1.8848097324371336 },
      { lat: 50.97254863674667, lng: 1.8850350379943848 },
      { lat: 50.97240000738332, lng: 1.8851101398468015 },
      { lat: 50.97214328281714, lng: 1.884927749633789 },
      { lat: 50.97204194378196, lng: 1.8846166133880613 },
      { lat: 50.9720622116067, lng: 1.8834471702575686 },
      { lat: 50.972136526888356, lng: 1.8827068805694582 },
      { lat: 50.97217706244642, lng: 1.8821489810943601 },
      { lat: 50.97225137754429, lng: 1.8817198276519773 },
      { lat: 50.972204086132116, lng: 1.8813872337341309 },
      { lat: 50.972190574291226, lng: 1.8810546398162842 },
      { lat: 50.97221084205111, lng: 1.8809258937835691 },
      { lat: 50.97251485738767, lng: 1.8808400630950928 },
      { lat: 50.97293371970271, lng: 1.8807005882263181 },
      { lat: 50.97325124184359, lng: 1.8806898593902586 },
      { lat: 50.973548494646295, lng: 1.880764961242676 },
      { lat: 50.97382547850002, lng: 1.8809688091278074 },
      { lat: 50.974048415523804, lng: 1.881333589553833 },
      { lat: 50.974298373944485, lng: 1.8817090988159177 },
      { lat: 50.974433486044155, lng: 1.8820631504058838 },
      { lat: 50.97446050841692, lng: 1.8824923038482666 }]
  },
  { name: "MSF: Grande-Synthe",
    coords: { lat: 51.020599, lng: 2.277731},
    location: "Grande-Synthe, Dunkirk, France",
    status: STATUS.ACTIVE,
    managedBy: "Médecins Sans Frontières",
    population: {
      total: 10000,
      types: [{
          name: "Women",
          total: 150
        },
        {
          name: "Children",
          total: 300
        },
        {
          name: "Men",
          total: 200
        }],
      origins: [{
        name: "Afganistan",
        total: 4000,
        distance: 10300
      },
      {
        name: "Iraq",
        total: 1500,
        distance: 6300
      },
      {
        name: "Syria",
        total: 5500,
        distance: 5890
      }]
    },
    articles: [{
      title: "We Visited the Lesser-Known French Migrant Camp That's Next in Line for Evictions",
      date: "04-04-2016",
      byLine: "Sally Hayden",
      imageUrl: dunkirk,
      url: "https://news.vice.com/article/we-visited-the-lesser-known-french-migrant-camp-thats-next-in-line-for-evictions-1",
      summary: "It's a decisive moment for Europe today as leaders meet with Turkey and try to finally nail down a deal in which Ankara will get billions of euros in return for stemming the flow of migrants."
    }],
    photos: [],
    videos: [{
      show: "Breaking Borders",
      title: "Dunkirk’s Migrant Crisis: Breaking Borders (Dispatch 9)",
      date: "03-08-2016",
      byLine: "VICE News",
      imageUrl: dispatch9,
      url: "https://news.vice.com/video/greeces-impending-humanitarian-catastrophe-breaking-borders-dispatch-11",
      summary: "The French government has agreed to set up new facilities to house migrants and refugees in Dunkirk, yet agencies offering aid to the residents of the camp have described conditions as deplorable and inhumane. Restrictions on what aid agencies can bring into the site, such as construction materials, have hampered efforts to improve conditions.",
      duration: "06:29"
    }],
    poly: [{ lat: 51.02126665787293, lng: 2.276144027709961 },
      { lat: 51.02113168207555, lng: 2.2757041454315186 },
      { lat: 51.02082798509467, lng: 2.2757041454315186 },
      { lat: 51.02020033836347, lng: 2.275972366333008 },
      { lat: 51.01991688221585, lng: 2.276315689086914 },
      { lat: 51.02001811675323, lng: 2.2778713703155513 },
      { lat: 51.0202948233609, lng: 2.279287576675415 },
      { lat: 51.02089547348458, lng: 2.2796738147735596 },
      { lat: 51.02138813575457, lng: 2.2794485092163086 },
      { lat: 51.021732321357426, lng: 2.278268337249756 },
      { lat: 51.02155685450663, lng: 2.2768521308898926 },
      { lat: 51.02124641152835, lng: 2.2761011123657227 }]
  },
  { name: "Kara Tepe",
    coords: { lat: 39.1274552440952, lng: 26.54295265674591 },
    location: "Kara Tepe, Mitilini, Greece",
    status: STATUS.ACTIVE,
    managedBy: "",
    population: {
      total: 6000,
      types: [{
          name: "Women",
          total: 3000
        },
        {
          name: "Children",
          total: 4000
        },
        {
          name: "Men",
          total: 2750
        }],
      origins: [{
        name: "Afganistan",
        total: 1500,
        distance: 4700
      },
      {
        name: "Iraq",
        total: 1500,
        distance: 2600
      },
      {
        name: "Syria",
        total: 3000,
        distance: 2090
      }]
    },
    articles: [],
    photos: [],
    videos: [],
    poly: [{ lat: 39.127721574195135, lng: 26.543591022491455 },
      { lat: 39.12844149270607, lng: 26.543349623680115 },
      { lat: 39.128395717759716, lng: 26.542829275131222 },
      { lat: 39.1282209404181, lng: 26.54269516468048 },
      { lat: 39.128121067456746, lng: 26.542577147483822 },
      { lat: 39.12800454882286, lng: 26.542389392852783 },
      { lat: 39.12780896353972, lng: 26.542249917984005 },
      { lat: 39.12748437399892, lng: 26.5422123670578 },
      { lat: 39.12686848204038, lng: 26.542598605155945 },
      { lat: 39.12679773734895, lng: 26.54300630092621 },
      { lat: 39.126776930073255, lng: 26.543285250663757 },
      { lat: 39.12696003388848, lng: 26.543800234794617 },
      { lat: 39.12702661697601, lng: 26.54392898082733 },
      { lat: 39.12745940551076, lng: 26.543730497360226 },
      { lat: 39.12770908999421, lng: 26.543617844581604 }]
  },
  { name: "Chios",
    coords: { lat: 38.372574350187165, lng: 26.138287782669067 },
    location: "Chios, Greece",
    status: STATUS.ACTIVE,
    managedBy: "",
    population: {
      total: 6000,
      types: [{
          name: "Women",
          total: 1000
        },
        {
          name: "Children",
          total: 3500
        },
        {
          name: "Men",
          total: 1500
        }],
      origins: [{
        name: "Afganistan",
        total: 1500,
        distance: 4700
      },
      {
        name: "Iraq",
        total: 1500,
        distance: 2600
      },
      {
        name: "Syria",
        total: 3000,
        distance: 2090
      }]
    },
    articles: [],
    photos: [],
    videos: [],
    poly: [{ lat: 38.37296126930215, lng: 26.139296293258667 },
      { lat: 38.372742576143544, lng: 26.13947868347168 },
      { lat: 38.37209490406584, lng: 26.13746166229248 },
      { lat: 38.37040420028617, lng: 26.13797664642334 },
      { lat: 38.370387377164505, lng: 26.13771915435791 },
      { lat: 38.372313599181865, lng: 26.13718271255493 },
      { lat: 38.3729949143448, lng: 26.139328479766846 }]
  },
  { name: "Roszke",
    coords: { lat: 46.187727, lng: 20.036964},
    location: "Roszke, Hungary",
    status: STATUS.ACTIVE,
    managedBy: "Hungarian Government",
    population: {
      total: 3200,
      types: [{
          name: "Women",
          total: 2990
        },
        {
          name: "Children",
          total: 4500
        },
        {
          name: "Men",
          total: 3000
        }],
      origins: [{
        name: "Afganistan",
        total: 1500,
        distance: 5300
      },
      {
        name: "Iraq",
        total: 500,
        distance: 3300
      },
      {
        name: "Syria",
        total: 2000,
        distance: 2890
      }]
    },
    articles: [],
    photos: [],
    videos: [],
    poly: [{ lat: 46.188736596928734, lng: 20.036970376968384 },
      { lat: 46.18852120153634, lng: 20.037753582000732 },
      { lat: 46.188268667932384, lng: 20.038129091262817 },
      { lat: 46.187986423119725, lng: 20.038150548934937 },
      { lat: 46.18751106015934, lng: 20.037474632263184 },
      { lat: 46.18730308757146, lng: 20.037120580673218 },
      { lat: 46.18747392225492, lng: 20.03669142723083 },
      { lat: 46.187726459510095, lng: 20.03627300262451 },
      { lat: 46.187978995605086, lng: 20.036015510559082 },
      { lat: 46.18836522503559, lng: 20.036391019821167 },
      { lat: 46.18864746790322, lng: 20.036637783050537 },
      { lat: 46.18875887916254, lng: 20.036777257919308 }]
  },
  { name: "Beydagi",
    coords: { lat: 38.2856679, lng: 38.4544692},
    location: "Beydagi, Turkey",
    status: STATUS.ACTIVE,
    managedBy: "UNCF",
    population: {
      total: 10000,
      types: [{
          name: "Women",
          total: 1200
        },
        {
          name: "Children",
          total: 2300
        },
        {
          name: "Men",
          total: 1450
        }],
      origins: [{
        name: "Afganistan",
        total: 1000,
        distance: 2300
      },
      {
        name: "Iraq",
        total: 3000,
        distance: 900
      },
      {
        name: "Syria",
        total: 6000,
        distance: 790
      }]
    },
    articles: [],
    photos: [],
    videos: [],
    poly: [{ lat: 38.286096563835315, lng: 38.454025983810425 },
      { lat: 38.285709180685544, lng: 38.45357537269592 },
      { lat: 38.28518705229948, lng: 38.453747034072876 },
      { lat: 38.285111259157084, lng: 38.454755544662476 },
      { lat: 38.28543127410884, lng: 38.455249071121216 },
      { lat: 38.286029193001255, lng: 38.45549583435058 },
      { lat: 38.28625656931559, lng: 38.45500230789184 },
      { lat: 38.28629025463493, lng: 38.45442295074463 },
      { lat: 38.286222883980656, lng: 38.45414400100708 }]
  }
];
