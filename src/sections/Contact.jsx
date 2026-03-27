import React, { useState } from 'react'
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Contact = () => {

  const [copied, setCopied] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);

    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/8 blur-[100px]" />

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
            { icon: Mail, label: "Email", href: "mailto:aaryanyadav.works@email.com", value: "aaryanyadav.works@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aaryanyadav85", value: "linkedin.com/in/aaryanyadav85" },
            { icon: Github, label: "GitHub", href: "https://github.com/Aaryan85", value: "github.com/aaryan85" },
            { icon: Instagram, label: "Instagram", href: "https://instagram.com/aaryan.yadav_05", value: "@aaryan.yadav_05" },
          ].map((item) => {
            const Icon = item.icon;
            const isCopied = copied === item.label;

            return (
              <div key={item.label} className="flex items-center gap-4 group relative">

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 
                  group-hover:border-teal-500/50 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.3)]
                  flex items-center justify-center text-lg transition-all"
                >
                  <Icon className="text-zinc-400 group-hover:text-teal-400" size={20} />
                </div>

                {/* Text */}
                <div className="relative">
                  <p className="text-zinc-500 text-xs font-mono">{item.label}</p>

                  {item.label === "Email" ? (
                    <div className="relative inline-block">
                      <p
                        onClick={() => handleCopy(item.value, item.label)}
                        className="cursor-pointer text-zinc-300 text-sm group-hover:text-teal-400 transition-colors"
                      >
                        {isCopied ? "Copied!" : item.value}
                      </p>

                      {/* Tooltip */}
                      {!isCopied && (
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 
                          bg-zinc-800 text-xs text-white px-2 py-1 rounded 
                          opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap">
                          Click to copy
                        </span>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <p className="text-zinc-300 text-sm group-hover:text-teal-400 transition-colors">
                        {item.value}
                      </p>
                    </a>
                  )}

                </div>

              </div>
            );
          })}

          <div className="pt-4 border-t border-zinc-800">
            <p className="text-zinc-400 text-xs font-mono">Based in India</p>
            <p className="text-zinc-400 text-xs font-mono mt-1">
              Open to internships & collaborations
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact