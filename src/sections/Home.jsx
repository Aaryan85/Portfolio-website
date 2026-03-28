
import { motion } from "framer-motion";
import TypeWriter from '../components/TypeWriter';
import { Github, Linkedin, Mail, Instagram, FileText } from "lucide-react";
import nftImage from '../assets/new-nft_tlfisy.png';
import SocialLinks from '../components/ui/SocialLinks'


const roles = [
  "Web-Developer",
  "Student",
  "Finance Enthusiast",
];

function Home() {





  return (
    <section id="home" className="h-screen w-full relative text-2xl text-amber-50">
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left">
          <div className="w-full lg:pr-24 mx-auto max-w-3xl">

            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              Hello, I'm
              <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap ">
                Aaryan Yadav
              </span>
            </motion.h1>

            <motion.div
              className="mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              A{" "}
              <TypeWriter
                words={roles}
                typingSpeed={50}
                deletingSpeed={50}
                delay={1000} />
            </motion.div>



            <motion.p className="mt-5 mb-5 text-base sm:text-lg md:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              Engineering student and aspiring full-stack developer passionate about building modern web applications, DSA and with a keen interest in finance and markets.
            </motion.p>



            <motion.div className=" flex gap-6 items-center justify-center lg:justify-start "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>

              <a href="#projects"
                className="px-3 py-2 rounded-full text-lg  text-white
              bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] hover:scale-105 transition-all
              duration-300 ">View My Work</a>
              <a href="/aaryan_resume.pdf"
                download={'Aaryan_Resume.pdf'}
                className="px-3 py-2 rounded-full text-lg  text-black bg-white
              hover:scale-105 transition-all
              duration-300 "> My Resume</a>
            </motion.div>

           
           
            
        <motion.div
  className="mt-10 flex justify-center lg:justify-start"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
>
  <SocialLinks />
</motion.div>
          

          </div>
        </div>


<div className="relative hidden lg:block">
  <motion.img
    src={nftImage}
    alt="aaryam.img"
    className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
    style={{
      right: "-75px",
      width: "min(45vw, 780px)",
      maxHeight: "65vh",
    }}
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.2, delay: 0.8 }}
  />
</div>

       



      </div>

    </section>
  );
}

export default Home;



        // <div className="   relative hidden lg:block  ">
        //   <motion.img src={a} alt="aaryam.img"
        //   className=" absolute top-1/2 translate-1/2 object-contain select-none  pointer-events-none"
        //   style={{
        //     right:"-30px" ,width:"min(45vw ,780px)" ,maxHeight:"90vh"
        //    }}
          
        //    initial={{ opacity: 0, y:40, scale:0.98 }}
        //       animate={{ opacity: 1, y: 0 , scale:1}}
        //       transition={{ duration: 0.2, delay: 0.8 }}

        //   />