import React from 'react'

const Fotter = () => {
  return (
     <footer className=" w-full dark:bg-black border-t border-zinc-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white m-1">
              Aaryan Yadav
            </h3>
            <p className="text-sm  text-gray-600 dark:text-gray-400 m-1 ">
              Building the future, one step at a time.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#home"
              className="text-md font-mono text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
             Home
            </a>
            <a
              href="#about"
              className="text-md font-mono text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
               About
            </a>
            <a
              href="#skills"
              className="text-md font-mono text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-md font-mono text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-md font-mono text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Contacts
            </a>
          </nav>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
            © 2026 aaryanbuilds. All rights reserved . Built with React & Tailwind 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Fotter