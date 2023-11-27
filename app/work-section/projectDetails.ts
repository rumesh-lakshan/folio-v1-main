export type ProjectProps = {
  id: number;
  name: string;
  description: string[];
  technologies: string[];
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "ROMANIA",
    description: [
      "HEAVY EQUIPMENT OPERATOR",
      "HEAVY EQUIPMENT MECHANIC ",
      "HEAVY EQUIPMENT ELECTRICIAN ",
      "TRUCK SERVICE MECHANIC ",
      "DRIVERS",
      "UNQUALIFIELD WORKERS      ",
      "MASON      ",
      "ROOF CARPENTER      ",
      "STEEL FIXER      ",
      "GENERAL WORKERS      ",
      "COOK      ",
      "BARTENDER      ",
      "KITCHEN HELPER      ",
      "PLUMBERS      ",
      "AGRICULTURAL WORKERS     ",
      
    ],
    technologies: ["550$ Basic+OT", "Food", "Acomodation"],
    demo: "https://web.facebook.com/photo/?fbid=122136259268029112&set=a.122135532422029112",
    image: require(".//../../public/projects/Romania.png"),
    available: true,
  },
  {
    id: 1,
    name: "DUBAI (UAE)",
    description: [
      "HEAVY EQUIPMENT OPERATOR",
      "HEAVY EQUIPMENT MECHANIC ",
      "HEAVY EQUIPMENT ELECTRICIAN ",
      "TRUCK SERVICE MECHANIC ",
      "HEAVY EQUIPMENT OPERATOR",
      "HEAVY EQUIPMENT MECHANIC ",
      "HEAVY EQUIPMENT ELECTRICIAN ",
      "TRUCK SERVICE MECHANIC ",
      "HEAVY EQUIPMENT OPERATOR",
      "HEAVY EQUIPMENT MECHANIC ",
      "HEAVY EQUIPMENT ELECTRICIAN ",
      "TRUCK SERVICE MECHANIC ",
    ],
    technologies: ["DDDD", "EEEE", "EEEE"],
    demo: "",
    image: require(".//../../public/projects/UAE.png"),
    available: true,
  },
  {
    id: 2,
    name: "OMAN",
    description: [
      "HEAVY EQUIPMENT OPERATOR",
      "HEAVY EQUIPMENT MECHANIC ",
      "HEAVY EQUIPMENT ELECTRICIAN ",
      "TRUCK SERVICE MECHANIC ",
      "HEAVY EQUIPMENT OPERATOR",
      "HEAVY EQUIPMENT MECHANIC ",
      "HEAVY EQUIPMENT ELECTRICIAN ",
      "TRUCK SERVICE MECHANIC ",
      "HEAVY EQUIPMENT OPERATOR",
      "HEAVY EQUIPMENT MECHANIC ",
      "HEAVY EQUIPMENT ELECTRICIAN ",
      "TRUCK SERVICE MECHANIC ",
    ],
    technologies: ["love", "sex", "work"],
    demo: "",
    image: require(".//../../public/projects/oman.png"),
    available: true,
  },
  {
    id: 3,
    name: "Notifications Senter",
    description: [
      "SMT Notifications center",
    ],
    technologies: ["ROMANIA"],
    demo: "",
    image: require(".//../../public/projects/1.png"),
    available: true,
  },
];

// export const designProjects = [
//   {
//     id: 1,
//     name: "Hebron Statup Lab Website",
//     description: [
//       "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
//     ],
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 2,
//     name: "RAGS Scrubs Website",
//     description: [
//       "An image generator website that allows users to generate, combine, and download images.",
//     ],
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 3,
//     name: "Crown Branding Agency Website",
//     description: [
//       "A website that reduces the length of your URL using Bit.ly's API",
//     ],
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image:
//       "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 4,
//     name: "Titi Mobile App",
//     description: [
//       "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
//     ],
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
//     available: false,
//   },
// ];
