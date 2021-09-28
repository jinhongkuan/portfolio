import React, { useEffect } from 'react'
import { parseISO } from 'date-fns'
import './App.css'

import { ProjectCard } from './components/projectCard'
import { SocialMediaTray } from './components/socialMedia'
import { motion } from 'framer-motion'

import profileImage from './assets/profile.png'
import downArrow from './assets/angle-double-down-solid.svg'
import fileDownload from './assets/file-download-solid.svg'
import { ProjectsList } from './data/projects'

const scrollInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const scrollInItems = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
}

const scrollDownVariants = {
  repeat: {
    y: -10,
    transition: {
      yoyo: Infinity,
      duration: 2,
    },
  },
}

const onClickScrollToBottom = () => {
  const bottomElement = document.getElementById('projectLabel')
  bottomElement?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div className="h-screen w-screen grid grid-cols-2 auto-cols-auto flex">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scrollInVariants}
            className="flex grid grid-cols-1 pl-16 h-5/6 self-center"
          >
            <motion.div variants={scrollInItems} className="flex items-center">
              <h1>Hello, I am Kuan 👋</h1>
            </motion.div>
            <motion.div variants={scrollInItems} className="flex items-center">
              <h2 className="mb-4">
                I am interested in applying <span>blockchain</span> and <span>game theory</span> to build
                fairer networks of tomorrow.
              </h2>
            </motion.div>
            <motion.div variants={scrollInItems} className="flex items-center">
              <SocialMediaTray />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            className="flex text-center justify-center items-center"
          >
            <div className="mb-32">
              <div className="flex justify-center mb-8">
                <img src={profileImage} className="App-logo" alt="profile" />
              </div>
              <p>B.S. Computer Science (Hon.)</p>
              <p>University of Minnesota, Twin Cities</p>
              <a
                href="https://bafybeict2muca46iqclzhrxzeuv5r6dodf5o7y2doxvefw6zlmo3lcsis4.ipfs.dweb.link/Resume%202021.pdf"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.circle
          className="Down-arrow"
          animate="repeat"
          variants={scrollDownVariants}
          onClick={onClickScrollToBottom}
        >
          <img src={downArrow}></img>
        </motion.circle>

        <motion.div
          className="flex justify-center w-full mt-16"
          id="projectLabel"
        >
          <h2>Projects</h2>
        </motion.div>

        <div className="grid grid-cols-2   w-full">
          {ProjectsList.map((element) => (
            <div className="flex justify-center">
              <ProjectCard details={element} />
            </div>
          ))}
        </div>
        <div id="bottomOfPage" style={{ marginTop: '25vh' }}></div>
      </body>
    </div>
  )
}

export default App
