import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import './css/About.css'
import { styles } from '../styles'
import { images } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  const abouts = [
    {
      title: 'Web and App Development',
      description:
        'possess a comprehensive understanding of both frontend and backend development',
      imgUrl: images.about1,
    },
    {
      title: 'Backend Development',
      description:
        'Skilled in backend development and capable of establishing connections to database for efficient data transmission',
      imgUrl: images.about2,
    },
    {
      title: 'Frontend Development',
      description:
        'Proficient in using HTML, CSS, React etc. to create interactive and user-friendly user interfaces for web applications.',
      imgUrl: images.about3,
    },
    {
      title: 'Server Deployment and Cloud Computing',
      description:
        'Experienced in deploying web applications and backend services on Oracle and AWS servers, ensuring efficient performance and scalability',
      imgUrl: images.about4,
    },
    {
      title: 'AI Model Training',
      description:
        'Well-versed in training regression models for predictive analysis and object detection models for image and video processing tasks',
      imgUrl: images.about5,
    },
  ]
  return (
    <>
      <motion.div variants={textVariant()} id="introduction">
        <br className="sm:block hidden"></br>
        <br className="sm:block hidden"></br>
        <br className="sm:block hidden"></br>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max=2-3xl leading-[30px]">
        As an skilled backend developer, I have hands-on experience in a diverse range of 
        programming languages including Java, C++, Python, and Go, alongside in-depth expertise in database management 
        using MySQL. My knowledge of cloud technologies such as Docker, AWS, and Terraform, and my advance Linux adminstration 
        skills, empowering me to deploy scalable and resilient backend solutions with minimum effort. 
      </motion.p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
