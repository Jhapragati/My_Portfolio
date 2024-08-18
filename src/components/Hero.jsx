import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile-modified.png";
import heroVideo from "../assets/2106-154902020_small.mp4";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// Define the variants for the container animations
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const controls = useAnimation();

  // Use an effect to animate the profile picture
  useEffect(() => {
    controls
      .start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 1.2 },
      })
      .then(() => {
        controls.start({
          y: [0, -20, 0],
          transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
        });
      });
  }, [controls]);

  return (
    <div
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center border-b border-neutral-900 pb-4 lg:mb-35"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center w-full px-4 lg:px-8">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 lg:pb-16 mx-5 text-4xl lg:text-6xl xl:text-8xl font-thin tracking-tight text-white z-20"
            >
              Pragati Jha
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent mx-5 z-20"
            >
              Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 mx-5 max-w-xl py-6 font-light tracking-tighter text-white text-sm lg:text-base z-20"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={controls}
              className="w-full max-w-xs lg:max-w-md z-20"
              src={profilePic}
              alt="Pragati Jha"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
