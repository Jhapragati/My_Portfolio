import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4cq7gis', 
      'template_c0uvgc7', 
      formState,
      '0xSohiwlabVFq8BKe' 
    )
    .then((result) => {
      alert('Message sent successfully!');
      setFormState({ name: '', email: '', message: '' });
    }, (error) => {
      alert('An error occurred, please try again.');
    });
  };

  return (
    <div id="contact" className="bg-black text-white flex flex-col justify-center items-center px-6 py-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h1>

      <div className="text-center tracking-tighter mb-12">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>

      <div className="flex justify-center space-x-6 mb-12">
        <a href="https://x.com/Pragatiiiii_j" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/pragatiiijha/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://github.com/Jhapragati" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub size={24} />
        </a>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center w-full max-w-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formState.name}
          onChange={handleChange}
          className="mb-4 p-2 w-full bg-neutral-700 text-white rounded border-2 border-transparent transition-all duration-300 hover:border-purple-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
          className="mb-4 p-2 w-full bg-neutral-700 text-white rounded border-2 border-transparent transition-all duration-300 hover:border-purple-600"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formState.message}
          onChange={handleChange}
          className="mb-4 p-2 w-full h-32 bg-neutral-700 text-white rounded border-2 border-transparent transition-all duration-300 hover:border-purple-600"
          required
        />
        <button
          type="submit"
          className="bg-purple-800 px-6 py-2 rounded text-white hover:bg-orange-700"
        >
          Send
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
