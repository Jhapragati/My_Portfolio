import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{opacity:1, x:0}}
          initial ={{opacity:0, x: -100}}
          transition={{duration: 0.5}}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-full max-w-xs lg:max-w-sm" src={aboutImg} alt="About" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1,x:0}}
          initial={{opacity: 0,x: -100}}
          transition={{ duration:1.5}}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-center lg:text-left">{ABOUT_TEXT}</p>
          </div>
          <div className="flex justify-center lg:justify-start mt-8">
            <a
              href="https://drive.google.com/file/d/1oHfLK60W7-50Hid-Kmgd2PTeFOBXzrI4/view?usp=sharing"
              download
              className="bg-purple-800 px-6 py-2 rounded text-white hover:bg-orange-700 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
