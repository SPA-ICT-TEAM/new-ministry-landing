import {
  // discordBlack,
  // facebook,
  file02,
  homeSmile,
  // instagram,
  // notification2,
  // notification3,
  // notification4,
  plusSquare,
  searchMd,
  // telegram,
  // twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About",
    url: "/about-us",
  },
  {
    id: "2",
    title: "Our Services",
    url: "/services",
  },
  {
    id: "3",
    title: "E-Services",
    url: "/eServices",
  },
  {
    id: "4",
    title: "ENSG",
    url: "",
  },  
  {
    id: "5",
    title: "Projects",
    url: "/project",
  },
  {
    id: "6",
    title: "Contact Us",
    url: "/contact",
  },
  {
    id: "7",
    title: "Login",
    url: "#login",
    onlyMobile: true,
  },
];
export const links = [
  { to: '/games', text: 'Games' },
  { to: '/live-events', text: 'Live Events' },
  { to: '/news', text: 'News & Blog' },
];

export const contactData = [
  {
    title:"Our Office Address",
    content : "State Secretariat Complex GRA Enugu.",
  },
  {
    title:"Phone Number",
    content : "08036699458",
  },
  {
    title:"e-Mail Address",
    content : "housing@enugustate.gov.ng",
  },
  {
    title:"Office Hour",
    content : "0800hrs – 1700hrs",
  }
]

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = []; //notification4, notification3, notification2

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const missionData = [
  {
    id: 0,
    title: "Our Mission",
    text: "Through the provision of affordable houses on owner-occupier basis, the housing needs of public servants, artisans, and other interested government citizens of the state are met transparently.",
    light: true, 
    backgroundUrl: "./src/assets/backgrounds/mission-background-1.svg", 
  },
  {
    id: 1,
    title: "Our Vision",
    text: "To have an enviable Enugu State where law-abiding taxable adults become homeowners within the shortest possible time.",
    light: true, 
    backgroundUrl: "./src/assets/backgrounds/mission-background-2.svg",
  }
];

export const serviceData = [
  {
    id: 0,
    title: "Policy Formulation, Supervision and Coordination of all Housing matters.",
    text: "Supervision and Coordination of all Housing matters.",
    light: true, 
    backgroundUrl: "./src/assets/backgrounds/mission-background-1.svg", 
  },
  {
    id: 1,
    title: "Design, Construction, Inspection and Maintenance of all Government buildings.",
    text: "Design, Construction, Inspection and Maintenance of all Government buildings.",
    light: true, 
    backgroundUrl: "./src/assets/backgrounds/mission-background-1.svg",
  },
  {
    id: 2,
    title: "Establishment of Housing Estates.",
    text: "Create Housing Estates",
    light: true, 
    backgroundUrl: "./src/assets/backgrounds/mission-background-2.svg", 
  }
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    // iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    // iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    // iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    // iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    // iconUrl: facebook,
    url: "#",
  },
];
