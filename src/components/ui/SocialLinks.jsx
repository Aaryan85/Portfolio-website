import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    icon: Github,
    link: "https://github.com/Aaryan85",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/aaryanyadav85/",
  },
  {
    icon: Instagram,
    link: "https://instagram.com/aaryan.yadav_05",
  },
  {
    icon: Mail,
    link: "mailto:aaryanyadav.works@email.com",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const SocialLinks = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center gap-4"
    >
      {socials.map((itemData, index) => {
        const Icon = itemData.icon;

        return (

            
          <motion.a
            key={index}
            href={itemData.link}
            target={itemData.link.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 
           transition-all duration-300 ease-out
      hover:border-teal-400 hover:text-teal-300 
      hover:bg-teal-500/10
      hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]
      hover:-translate-y-5
      hover:scale-125
      cursor-default"
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;