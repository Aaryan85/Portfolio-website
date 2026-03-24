import React from 'react'

const Skills = () => {
  return (
   <section id="skills" className="relative min-h-70  py-24 px-6 overflow-hidden">

     <div className="mt-20 text-center mb-16 space-y-3">
          <p className="text-teal-400 font-mono text-lg tracking-[0.3em] uppercase">// What I work with</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            My <span className="text-teal-400">Skills</span>
          </h2>
          <p className="text-zinc-500 text-lg font-mono mt-5 max-w-lg mx-auto">Tools and technologies I've been working with while building real-world projects.</p>
        </div>

     {/* Tech badge cloud */}
        <div className=" mt-12  flex flex-wrap justify-center  gap-4">
          {["React", "JavaScript", "Java", "C",  "Html5", "Css3", "MySQL","Tailwind","MongoDB","Git", "GitHub", "Socket.io", "framer.js"].map((t) => (
            <span key={t} 
            className="px-4 py-1.5 rounded-full text-md font-mono border border-zinc-700 text-zinc-300 
    
      transition-all duration-300 ease-out
      hover:border-teal-400 hover:text-teal-300 
      hover:bg-teal-500/10
      hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]
      hover:-translate-y-8
      hover:scale-150
      cursor-default"
    >
              {t}
            </span>
          ))}
        </div>
   </section>
  )
}

export default Skills