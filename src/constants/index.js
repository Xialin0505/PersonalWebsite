import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  Cpp,
  aws,
  mysql,
  postman,
  python,
  pythonLogo,
  reactjs,
  nodejs,
  Linux,
  compiler,
  os,
  leisurely,
  recipe,
  git,
  docker,
  cmu,
  cmu2,
  javaLogo,
  cafe,
  university,
  starChat,
  about01,
  about02,
  about03,
  about04,
  about05,
  AI,
  house,
  faceDetection,
  Go,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
]

const technologies = [

  {
    name: "mysql",
    icon: mysql
  },
  {
    name: "python",
    icon: python
  },
  {
    name: "postman",
    icon: postman
  },

  {
    name: "AWS EC2",
    icon: aws,
  },
 
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },

  {
    name: "cpp",
    icon: Cpp,
  },

  {
    name: "Go",
    icon: Go,
  },

  {
    name: "Java",
    icon: javaLogo,
  },

]

const experiences = [
  {
    title: "Bachelor's Degree in Computer Engineering",
    company_name: "University of Waterloo",
    icon: university,
    iconBg: "#E6DEDD",
    date: "Sept 2018 - May 2023",
    points: [
      "Broad knowledge from diverse courses including: machine learning, cloud computing, and ",
      "C++ programming: Students learn C++ and utilize it to implement various functionalities and features.",
      "Comprehensive Computer Engineering program: University of Waterloo offers a comprehensive program covering computer architecture, software development, digital systems, networking, and more.",
      "Code writing for Hardware: Students learn how to write code for Hardware using Quartus VHDL, specifically in the context of designing projects for FPGA.",
    ]
  },

  {
    title: "QA Engineer",
    company_name: "DarkMatter Canada Inc.",
    icon: javaLogo,
    iconBg: "#383E56",
    date: "Jan 2019 - Apr 2019",
    points: [
      `Implemented and extended a Java-based API (SDK) automation testing system for the company's Android
      application, enhancing the efficiency and reliability of testing processes.`,
      `Authored comprehensive documentation and established guidelines for creating future documentation
      throughout the organization.`,
      `Facilitated effective team collaboration by organizing daily meetings, assigning tasks within the QA team, and
      led the team to successfully accomplish objectives before the end of each Agile development cycle.`,
    ],
  },

  {
    title: "Software Design Engineer",
    company_name: "Evertz Microsystem Ltd. – R&D Department",
    icon: pythonLogo,
    iconBg: "#383E56",
    date: "Jan 2019 - Apr 2019",
    points: [
      `Designed, developed, and implemented an extensible and comprehensive automation testing/analysis
      framework using Python and bash, to evaluate the performance of company's research project on enhancing
      data transmission protocols for video streaming.`,
      `Automated performance testing processes, saving 16 hours of testing time. Collected performance statistics
      and conducted in-depth analysis of protocol effectiveness, generating automated testing reports for valuable
      insights and data-driven decision-making.`,
      `Collaborated closely with Linux systems, effectively troubleshoot and resolved networking issues on Linux
      servers, ensuring smooth operations and optimal performance.`,
    ],
  },

  {
    title: "Junior Dev-ops",
    company_name: "Tucows Inc.",
    icon: aws,
    iconBg: "#383E56",
    date: "Apr. 2020 – Aug. 2020, Jan 2021 - Apr 2021",
    points: [
      `Collaborated with the site reliability team to develop and optimize infrastructure modules/nodes on the company's cloud platform, 
      established and maintained automated monitoring for the organization's systems, which provided valuable benefits to multiple teams`,
      `Explored innovative approaches to leverage cloud technologies resulting in significant improvements to the company’s infrastructure 
      and development process. Successfully reduced server load by 30% and enabled efficient local testing for streamlined development process.`,
      "Achieved a remarkable reduction in node deployment time to 2 minutes, with flexible add-on options.",
    ],
  },

  {
    title: "Master's in Computer Engineering",
    company_name: "Carnegie Mellon University",
    icon: cmu,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]


const projects = [
  {
    name: "Leisurely - Itinerary Day-trip Planner App",
    description:
      `Leisurely is an itinerary day-trip planner app that generate personalize one day trip plan on Andriod operating systems.`,
    tags: [
      {
        name: "Postgresql",
        color: "brown-text-gradient",
      },
      {
        name: "Go language",
        color: "purple-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "yellow-text-gradient",
      },
      {
        name: "Android Studio",
        color: "pink-text-gradient",
      },
    ],
    image:leisurely,
    source_code_link: "https://github.com/Xialin0505/Leisurely-backend",
  },
  {
    name: "Recipe Website Backend",
    description:
      `A high-performance MySQL database for a website that store hundreds of recipe, ensuring
      improved data consistency and minimizing human error.`,
    tags: [
      {
        name: "MySQL",
        color: "yellow-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Database",
        color: "blue-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/Xialin0505/RecipeDatabase",
  },

  {
    name: "Cafe Website",
    description:
      `A café website displaying the café’s location and menu, featuring an interacting
      reservation system and admin panel reservation management.`,
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: cafe,
    source_code_link: "https://github.com/Xialin0505/CafeWebPage",
  },

  {
    name: "Real-time Operating System",
    description:
      `A operating system written in C on Keil MCB1700 board, which is able to display user's keyboard input, 
      display a clock to the console and take user's input instructions`,
    tags: [
      {
        name: "C",
        color: "yellow-text-gradient",
      },
      {
        name: "Operating System",
        color: "purple-text-gradient",
      },
    ],
    image: os,
    source_code_link: ""
  },
  {
    name: "Compiler for Logical Equation",
    description:
      `This Java-based project fully ultilize the Object-Orient Programming Principle, 
      which is to automatically translate betweeen logical equation and its corresponding Logic Gate`,
    tags: [
      {
        name: "Java",
        color: "yellow-text-gradient",
      },
      {
        name: "OOP",
        color: "blue-text-gradient",
      },
    ],
    image: compiler,
    source_code_link: ""
  },
]
const images =
  { about1: about01, about2: about02, about3: about03, about4: about04, about5: about05 }

export { services, technologies, experiences , projects, images }
