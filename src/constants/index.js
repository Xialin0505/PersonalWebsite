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
      "Broad knowledge from diverse courses including: machine learning, cloud computing, and distributed systems",
      "Established solid foundation of programming skills, concept and knowledge",
      "Graduated with Distinction on Dean's honor list, as recognition for students with outstanding academic achievement",
      `Earned two president awards, which given for students with outstanding academic achievement who undertake undergraduate 
      research assistantship and alone with outstanding academic achievement.`
    ]
  },

  {
    title: "QA Engineer",
    company_name: "DarkMatter Canada Inc.",
    icon: javaLogo,
    iconBg: "#383E56",
    date: "Jan 2019 - Apr 2019",
    points: [
      `Led a team of 6 peopele, to implemented and extended a Java-based API (SDK) automation testing system for the company's Android
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
      framework using Python and bash, integrated with Jenkins and Docker, to evaluate the performance of company's research 
      project on enhancing data transmission protocols for video streaming.`,
      `Automated performance testing processes, saving 64 hours of testing time. Collected performance statistics
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
      `Collaborated with the site reliability team to develop and optimize automation monitoring system on the company's AWS S3 cloud platform, 
      established and maintained automated monitoring for the organization's systems, which provided valuable benefits to multiple teams.`,
      `Explored innovative approaches to leverage cloud technologies resulting in significant improvements to the company’s infrastructure 
      and development process. Successfully reduced server load by 30% and enabled efficient local testing by replicate cloud environment using Docker
      for streamlined development process.`,
      "Achieved a remarkable reduction in node deployment time to 2 minutes, with flexible add-on options.",
    ],
  },

  {
    title: "Undergraduate Research Fellowship",
    company_name: "University of Waterloo",
    icon: university,
    iconBg: "#383E56",
    date: "Jan. 2022 – Apr. 2022",
    points: [
      `Assisted professor in implementing USB device drivers (C++) for his experimental kernel that carried a new user-level thread 
      implementation he was working on.`,
      `Implemented the xHCI USB controller, enabling comprehensive support for diverse USB devices within the kernel.`,
    ],
  },

  {
    title: "Master's in Computer Engineering",
    company_name: "Carnegie Mellon University",
    icon: cmu,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Specialize in Distributed system and cloud computing, by taking relevant courses.",
      "Further develop professional skills by taking advanced courses on more specialized topics.",
    ],
  },
]


const projects = [
  {
    name: "Leisurely - Itinerary Day-trip Planner App",
    description:
      `Leisurely is an itinerary day-trip planner app that generate personalize one day trip plan on Andriod operating systems. It supports
      over 190 countries by integrate Google Map API with a distributed backend consists of 5 AWS servers`,
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
      display a real-time clock with high accuracy in second to the console and take user's keyboard instructions.`,
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
      which is to automatically translate betweeen logical equation and its corresponding Logic Gate scheme.`,
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
