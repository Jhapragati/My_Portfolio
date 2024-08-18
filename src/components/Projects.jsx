import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4 px-4 lg:px-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="max-w-xs mx-auto border rounded-lg shadow-lg bg-neutral-800 overflow-hidden"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h6 className="mb-2 text-lg font-semibold text-white">{project.title}</h6>
              <p className="mb-3 text-neutral-400 text-sm">{project.description}</p>
 <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-3 py-1 mt-3 text-xs font-medium text-white bg-purple-800 rounded hover:bg-orange-700"
            >
  View on GitHub
</a>


            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
