import { format, formatDistance } from 'date-fns'
import { defaultMaxListeners } from 'events'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import githubIcon from '../assets/github-brands.svg'
import externalURLIcon from '../assets/external-link-alt-solid.svg'

export interface CardDetails {
  title: string
  date: [Date, Date]
  description: JSX.Element
  tags: string[]
  github?: string
  externalURL?: string
}

const visibilityVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const FadeInWhenVisible: React.FC = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export const ProjectCard = (props: { details: CardDetails }) => {
  return (
    <FadeInWhenVisible>
      <div className="w-160 bg-white border-2 border-black p-4 mt-16 ">
        <span className="Card-title">{props.details.title}</span>
        <div className="Card-description">{props.details.description}</div>

        <div className="Card-date">
          {format(props.details.date[0], 'MM/dd/yyyy') +
            '  -  ' +
            (props.details.date[1].getTime() > Date.now()
              ? 'Ongoing'
              : format(props.details.date[1], 'MM/dd/yyyy'))}
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            {props.details.tags.map((tag) => (
              <span className="Card-tags  border border-black p-1">{tag}</span>
            ))}
          </div>
          <div className="flex justify-end items-center col-span-1">
            {props.details.github ? (
              <a href={props.details.github} target="_blank">
                <img src={githubIcon} className="Card-actions"></img>
              </a>
            ) : (
              ''
            )}
            {props.details.externalURL ? (
              <a href={props.details.externalURL} target="_blank">
                <img src={externalURLIcon} className="Card-actions"></img>
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  )
}
