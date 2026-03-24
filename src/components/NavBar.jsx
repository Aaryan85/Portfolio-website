import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-600">
        <div className="flex justify-between items-center px-6 md:px-10 py-4">
          {/* LOGO */}
          <span  className="text-white font-bold text-2xl uppercase">
            AARYAN
          </span>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-12 text-[17px] font-medium">
  <a href="#home" className="text-gray-300 hover:text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[#00bf8f] after:transition-all after:duration-300 hover:after:w-full">Home</a>
  <a href="#about" className="text-gray-300 hover:text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[#00bf8f] after:transition-all after:duration-300 hover:after:w-full">About</a>
  <a href="#skills" className="text-gray-300 hover:text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[#00bf8f] after:transition-all after:duration-300 hover:after:w-full">Skills</a>
  <a href="#projects" className="text-gray-300 hover:text-white relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[#00bf8f] after:transition-all after:duration-300 hover:after:w-full">Projects</a>
</div>
          <button
  onClick={() => {
    window.location.href =
      "mailto:aaryanyadav.works@gmail.com?subject=Lets%20Connect&body=Hi%20Aaryan,%20I%20would%20like%20to%20connect%20with%20you.";
  }}
  className="hidden bg-[#00bf8f] rounded-2xl px-4 py-2 md:flex items-center gap-2 font-semibold 
  hover:shadow-lg hover:shadow-[#00bf8f]/50 hover:-translate-y-1 hover:scale-[1.02] 
  transition-all duration-300 ease-out"
>
  Let's Talk <ArrowRight size={16} strokeWidth={3} />
</button>

          {/*menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
  className={`fixed top-25 rounded-4xl left-0 w-full bg-black/90 backdrop-blur-md z-40
  transition-all duration-300 ease-in-out md:hidden
  ${open 
    ? "opacity-90 translate-y-0 pointer-events-auto" 
    : "opacity-0 -translate-y-4 pointer-events-none"}`}
>
  <div className="flex flex-col items-center gap-6 py-8">
    <a onClick={() => setOpen(false)} href="#home" className="text-white">Home</a>
    <a onClick={() => setOpen(false)} href="#about" className="text-white">About</a>
    <a onClick={() => setOpen(false)} href="#skills" className="text-white">Skills</a>
    <a onClick={() => setOpen(false)} href="#projects" className="text-white">Projects</a>

   <a href="mailto:aaryanyadav.works@gmail.com?subject=Lets%20Connect&body=Hi%20Aaryan,%20I%20would%20like%20to%20connect%20with%20you.">
  <button className="bg-gray-200 rounded-full px-6 py-2 text-black">
    Let's talk
  </button>
</a>
  </div>
</div>
    </>
  );
};

export default NavBar;