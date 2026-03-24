import React from 'react'

const Project = () => {

  const projects = [
    {
      title: "InfraChat",
      subtitle: "Internal Messaging Platform",
      description: "A full-stack real-time messaging app with RBAC across 3 user roles, JWT auth, Socket.io live updates.  An hackathon project made with Team 'HyperScript Surge' ",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      emoji: "💬",
      accent: "teal",
      github: "https://github.com/arjunrhetoric/InfraChat",
      live: " https://infra-chat-sudo1.vercel.app/"
    },
    
    {
      title: "Portfolio Website",
      subtitle: "Personal Brand Site",
      description: "Modern portfolio with animations, dark UI, and responsive design.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      emoji: "🌐",
      accent: "green",
      github: "#",
      live: "#",
    },
    {
      title: "Tech Hunt",
      subtitle: "Quiz Game",
      description: "A mind-bending game of logic, tech, and knowledge that challenges and frustrates your mind.  ",
      tags: ["Html", "Javascript", "Tailwind Css"],
      emoji: "🎮",
      accent: "teal",
      github: "https://github.com/Aaryan85/techHunt",
      live: "https://tech-hunt-tau.vercel.app/",
    },
  ];

  const accentMap = {
    teal: "border-teal-500/30 hover:border-teal-400",
    emerald: "border-emerald-500/30 hover:border-emerald-400",
    green: "border-green-500/30 hover:border-green-400",
  };

  return (
    <section id='projects' className="relative  py-24 px-6 overflow-hidden">

      <div className="pointer-events-none absolute -bottom-20 -right-20 w-125 h-125 rounded-full bg-teal-600/8 blur-[130px]" />

      {/* Heading */}
      <div className="text-center mb-16 space-y-3">
        <p className="text-teal-400 font-mono text-lg tracking-[0.3em] uppercase">
          // Things I've built
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          Featured <span className="text-teal-400">Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          
          <div
            key={p.title}
            className={`group relative bg-zinc-900/40 border rounded-2xl p-6 transition-all duration-300 ${accentMap[p.accent]} 
            hover:bg-zinc-900/70 hover:shadow-[0_0_25px_rgba(20,184,166,0.2)] hover:-translate-y-8
      hover:scale-102`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >

            {/* Emoji */}
            <div className="text-3xl mb-3">{p.emoji}</div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white">{p.title}</h3>
            <p className="text-sm text-zinc-400 mb-2">{p.subtitle}</p>

            {/* Description */}
            <p className="text-zinc-400 text-sm mb-4">{p.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 border border-zinc-700 text-zinc-300
                  hover:border-teal-400 hover:text-teal-300 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a href={p.github} className="text-sm bg-fuchsia-600/20 px-2 py-1 rounded-full border border-zinc-700 text-zinc-300
                  hover:border-teal-400 text-zinc-300 hover:text-teal-400">
                GitHub →
              </a>
              <a href={p.live} className="text-sm bg-cyan-800/30 px-2 py-1 rounded-full border border-zinc-700 text-zinc-300
                  hover:border-teal-400 text-zinc-300 hover:text-teal-400">
                Live →
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-10">
        <a className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-300 hover:border-teal-500 hover:text-teal-400 px-6 py-3 rounded-full text-sm font-mono transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]">
          View All Projects →
        </a>
      </div>

    </section>
  )
}

export default Project