import React from 'react'

export const SocialMediaTray = () => {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-4 text-5xl h-16">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a
          href="https://www.linkedin.com/in/jin-hong-kuan/"
          className="fa fa-linkedin -ml-4"
          target="_blank"
        ></a>
        <a
          href="https://github.com/jinhongkuan"
          className="fa fa-github -ml-4"
          target="_blank"
        ></a>
        <a
          href="https://kuanjh123.medium.com"
          className="fa fa-medium -ml-4"
          target="_blank"
        ></a>
        <a
          href="mailto:kuanjh123@gmail.com"
          className="fa fa-google -ml-4"
          target="_blank"
        ></a>
      </div>
    </div>
  )
}
