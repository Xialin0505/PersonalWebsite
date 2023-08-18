import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  dBeaver,
  Cpp,
  aws,
  androidstudio,
  AI_micro,
  mysql,
  postman,
  python,
  pythonLogo,
  wordpress,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
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


  // {
  //   name: "dBeaver",
  //   icon: dBeaver
  // },
  // {
  //   name: "AI_micro",
  //   icon: AI_micro
  // },
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


  // {
  //   name: "wordpress",
  //   icon: wordpress
  // },


  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
      // 待修改
      "Broad knowledge from diverse courses: University of Waterloo offers a wide curriculum, enhancing students' knowledge across various subjects and enriching their learning experience.",
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
      // 待修改
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Software Design Engineer",
    company_name: "Evertz Microsystem Ltd. – R&D Department",
    icon: pythonLogo,
    iconBg: "#383E56",
    date: "Jan 2019 - Apr 2019",
    points: [
      // 待修改
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Junior Dev-ops",
    company_name: "Tucows Inc.",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Apr. 2020 – Aug. 2020, Jan 2021 - Apr 2021",
    points: [
      // 待修改
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Master's in Computer Engineering",
    company_name: "Carnegie Mellon University",
    icon: cmu,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      // 待修改
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]


const projects = [
  {
    name: "Cafe Website",
    description:
      "Developed a responsive website using Node.js as the backend framework, along with HTML, CSS, and MySQL for the frontend. Implemented a user reservation system and an admin panel for efficient management.",
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
    source_code_link: "https://github.com/xiayulin123/user_back_end.git",
  },
  {
    name: "Leisurely - Itinerary Day-trip Planner App",
    description:
      "YulinNote is a notes website with both front-end and back-end deployed on Oracle Cloud, connected to a Mongo database. It allows users to record notes and includes authentication functionality.",
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
        color: "blue-text-gradient",
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
        color: "blue-text-gradient",
      },
    ],
    source_code_link: "https://github.com/xiayulin123/NoteBook",
  },
  {
    name: "Recipe Website Backend",
    description:
      "FaceSim Detect is an advanced facial recognition system utilizing Siamese network architecture. It offers real-time facial verification and detection, capturing images from webcams and computing similarity distances. Securely designed with TensorFlow and OpenCV, it ensures user confidence through robust authentication.",
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
    image: faceDetection,
    source_code_link: "https://github.com/xiayulin123/Facial_Recognition",
  },

  {
    name: "Real-time Operating System",
    description:
      "Star Chat is a lightweight messaging application designed for seamless communication between users. It provides a delightful user experience and has been optimized to maximize its effectiveness.",
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
    image: starChat,
    source_code_link: "https://github.com/xiayulin123/StarChat_frontend",
  },
  {
    name: "Compiler Model",
    description:
      "This repository houses two AI models, one for movie rating prediction (Movie_Rate) and the other for California housing price estimation (California_Housing), utilizing Python libraries like Pandas, NumPy, Matplotlib, and Seaborn, along with datasets from Kaggle, to train and optimize these models, resulting in highly efficient and accurate predictions.",
    tags: [
      {
        name: "Pandas",
        color: "yellow-text-gradient",
      },
      {
        name: "NumPy",
        color: "blue-text-gradient",
      },
      {
        name: "Matplotlib",
        color: "green-text-gradient",
      },
    ],
    image: house,
    source_code_link: "https://github.com/xiayulin123/MovieRate_and_CaliforniaHousing_AI_Model",
  },
  {
    name: "Object Detection",
    description:
      "The AI project is an object recognition model developed in Jupyter Notebook using PyTorch, OpenCV, and NumPy to identify AirPods and water bottles in images with detailed instructions provided to retrain and extend the model's capabilities. The project also incorporates YOLOv5 for real-time object detection and an image labeling tool for data preparation.",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "purple-text-gradient",
      },
    ],
    image: AI,
    source_code_link: "https://github.com/xiayulin123/Object_Detection",
  },
]
const images =
  { about1: about01, about2: about02, about3: about03, about4: about04, about5: about05 }

export { services, technologies, experiences , projects, images }
