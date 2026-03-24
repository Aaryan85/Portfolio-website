import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="relative  py-24 px-6 overflow-hidden">

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-teal-500/8 blur-[100px]" />

      {/* Heading */}
      <div className="text-center mb-16 space-y-3">
        <p className="text-teal-400 font-mono text-lg tracking-[0.3em] uppercase">
          // Get in touch
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white">
          Let's <span className="text-teal-400">Talk</span>
        </h2>
        <p className="text-zinc-500 max-w-md mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          {[
            { icon: "📧", label: "Email",herf:"mailto:aaryanyadav.works@email.com" , value: "aaryanyadav.works@gmail.com" },
            { icon: "💼", label: "LinkedIn",herf:"https://www.linkedin.com/in/aaryanyadav85/" , value: "linkedin.com/in/aaryanyadav85/" },
            { icon: "🐙", label: "GitHub", herf:"https://github.com/Aaryan85" , value: "github.com/aaryan85" },
            { icon: "📸", label: "Instagram",herf:"https://instagram.com/aaryan.yadav_05" , value: "@aaryan.yadav_05" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 group">
              
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 
              group-hover:border-teal-500/50 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.3)]
              flex items-center justify-center text-lg transition-all">
                {item.icon}
              </div>

              <div>
                <p className="text-zinc-500 text-xs font-mono">{item.label}</p>
                <a href={item.herf}>
                <p className="text-zinc-300 text-sm group-hover:text-teal-400 transition-colors">
                  {item.value}
                </p>
                </a>
              </div>

            </div>
          ))}

          <div className="pt-4 border-t border-zinc-800">
            <p className="text-zinc-600 text-xs font-mono">Based in India </p>
            <p className="text-zinc-600 text-xs font-mono mt-1">
              Open to internships & collaborations
            </p>
          </div>
        </div>



      </div>
    </section>
  )
}

export default Contact

        {/* RIGHT — FORM */}
        // <div className="lg:col-span-3 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 backdrop-blur">

        //   <form className="space-y-4">

        //     <input
        //       type="text"
        //       placeholder="Your Name"
        //       className="w-full p-3 rounded bg-zinc-900 border border-zinc-800 text-white focus:border-teal-500 outline-none"
        //     />

        //     <input
        //       type="email"
        //       placeholder="Your Email"
        //       className="w-full p-3 rounded bg-zinc-900 border border-zinc-800 text-white focus:border-teal-500 outline-none"
        //     />

        //     <textarea
        //       rows="4"
        //       placeholder="Your Message"
        //       className="w-full p-3 rounded bg-zinc-900 border border-zinc-800 text-white focus:border-teal-500 outline-none"
        //     ></textarea>

        //     <button
        //       type="submit"
        //       className="w-full bg-teal-500 text-black font-semibold py-3 rounded hover:bg-teal-400 transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]"
        //     >
        //       Send Message →
        //     </button>

        //   </form>

        // </div>