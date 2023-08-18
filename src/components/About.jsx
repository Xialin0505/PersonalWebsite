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
        'Possess a comprehensive understanding of application development process, proficiency in API design',
      imgUrl: images.about1,
    },
    {
      title: 'Backend Development',
      description:
        'Skilled in building resilient, distributed backend system for optimizing performance and CPU usage',
      imgUrl: images.about2,
    },
  
    {
      title: 'Cloud Computing',
      description:
        'Experience in various cloud computing tools: hadoop, spark and kafka, with a high level insight of their principles',
      imgUrl: images.about3,
    },

    {
      title: 'DevOps and Site Reliability Engineer',
      description:
        `Skilled in design and implement scalable, secure, and highly available cloud architectures, to monitor and optimize the
        performance of the cloud architectures`,
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
        I am an adept backend developer with practical proficiency across a variety of programming languages, 
        including Java, C++, Python, and Go. In addition, I possess extensive knowledge in database administration, 
        specifically in MySQL. My familiarity with cloud tools like Docker, AWS, and Terraform, paired with my advanced 
        Linux administration capabilities, equips me to effortlessly create backend solutions that are both scalable and robust.
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
