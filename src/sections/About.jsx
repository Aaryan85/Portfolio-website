import React from 'react'
import { motion } from 'framer-motion'

const About = () => {

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="about" className="relative min-h-screen  overflow-hidden flex items-center py-24 px-6">
      
     

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left — Card */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-80 rounded-3xl border border-teal-500/30 bg-linear-to-br from-teal-950/40 to-black flex flex-col items-center justify-center gap-4 shadow-[0_0_60px_rgba(20,184,166,0.15)]">
            
            <div className="absolute -inset-px rounded-3xl bg-linear-to-br from-teal-500/40 via-transparent to-emerald-500/20 opacity-50" />
            
            <div className="text-6xl">🐨</div>
            <p className="text-teal-400 font-mono text-sm tracking-widest uppercase">
              Aaryan Yadav
            </p>
            <p className="text-zinc-400 text-xs tracking-wider">
              Engineering Student
            </p>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-teal-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-teal-500/40">
              Available ✦
            </div>
          </div>

          {/* Floating dots */}
          <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
          <div className="absolute bottom-10 left-0 w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-300" />
      </motion.div>

        {/* Right — Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <p className="text-teal-400 font-mono text-lg tracking-[0.3em] uppercase">
            // About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Building with <span className="text-teal-400">curiosity</span> & code.
          </h2>

          <p className="text-zinc-400 leading-relaxed text-base">
            I’m a passionate engineering student driven by curiosity and a strong interest in building impactful digital experiences. I enjoy working across the full stack, turning ideas into functional and intuitive applications while continuously sharpening my problem-solving skills through data structures and algorithms. Alongside tech, I have a keen interest in finance and financial markets, which influences how I approach problem-solving.
          </p>

          <p className="text-zinc-400 leading-relaxed text-base">
            When I'm not coding, I'm exploring financial markets, traveling to new places
            or building late-night projects.
          </p>
       </motion.div>

      </div>
    </section>
  )
}

export default About