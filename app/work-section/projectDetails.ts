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
    ],
    technologies: ["550$ Basic+OT", "Food", "Acomodation"],
    demo: "https://flixify.victorwilliams.me/",
    image: require(".//../../public/projects/Romania.png"),
    available: true,
  },
  {
    id: 1,
    name: "DUBAI (UAE)",
    description: [
      "The visa is valid for staying in the country for 2 years as of the date of stamping on the passport. Multi-entry visa. Requirements.",
    ],
    technologies: ["DDDD", "EEEE", "EEEE"],
    demo: "https://sky-watch.vercel.app/",
    image: require(".//../../public/projects/UAE.png"),
    available: true,
  },
  {
    id: 2,
    name: "OMAN",
    description: [
      "The visa is valid for staying in the country for 2 years as of the date of stamping on the passport. Multi-entry visa. Requirements.",
    ],
    technologies: ["love", "sex", "work"],
    demo: "http://alpaca-image-generator-beta.vercel.app",
    image: require(".//../../public/projects/oman.png"),
    available: true,
  },
  {
    id: 3,
    name: "Special Notifications",
    description: [
      "SMT Notifications center",
    ],
    technologies: ["ROMANIA"],
    demo: "https://url-shortener-nine-delta.vercel.app",
    image: require(".//../../public/projects/1.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description: [
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    ],
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description: [
      "An image generator website that allows users to generate, combine, and download images.",
    ],
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description: [
      "A website that reduces the length of your URL using Bit.ly's API",
    ],
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description: [
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    ],
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
