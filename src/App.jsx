import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Project from './sections/Project'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Fotter from './sections/Fotter'
import Cursor from './components/Cursor'
import GlowBackground from './components/GlowBackground'
import IntroAnimation from './components/IntroAnimation'

const App = () => {

  const [introFinished, setIntroFinished] = useState(false)

  return (
    <div className="relative bg-black">

      {/* Intro Loader */}
      {!introFinished && (
        <IntroAnimation onFinish={() => setIntroFinished(true)} />
      )}

      {/* Main Website */}
      {introFinished && (
        <>
          <Cursor />
          <NavBar />

          <GlowBackground
            glows={[
              {
                position: "-top-32 -left-32",
                size: "w-[70vw] h-[70vw]",
                gradient: "from-[#302b63] via-[#00bf8f] to-[#1cd8d2]",
                opacity: "opacity-40",
              },
              {
                position: "top-500 -left-30",
                size: "w-[60vw] h-[300vw]",
                gradient: "from-[#302b63] via-[#00bf8f] to-[#1cd8d2]",
                opacity: "opacity-30",
                delay: "delay-500",
              },
              {
                position: "top-100 -right-20",
                size: "w-[60vw] h-[60vw]",
                gradient: "from-[#302b63] via-[#00bf8f] to-[#1cd8d2]",
                opacity: "opacity-30",
                delay: "delay-500",
              },
              {
                position: "bottom-0 right-0",
                size: "w-[60vw] h-[60vw]",
                gradient: "from-[#302b63] via-[#00bf8f] to-[#1cd8d2]",
                opacity: "opacity-30",
                delay: "delay-500",
              },
            ]}
          />

          <Home />
          <About />
          <Skills />
          <Project />
          {/* <Experience /> */}
          <Contact />
          <Fotter />
        </>
      )}
    </div>
  )
}

export default App