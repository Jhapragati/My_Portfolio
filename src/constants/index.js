import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a tech enthusiast with a strong passion for exploring and leveraging new technologies. Proficient in front-end development using HTML, CSS, JavaScript, and React, I am also expanding my expertise in backend development. My goal is to create innovative solutions that drive business growth and enhance user experiences. I am eager to contribute to emerging technologies and impactful projects.`;

export const ABOUT_TEXT = `I am a final-year student pursuing a Bachelor of Technology in Information Technology. With a strong passion for development, I enjoy designing and creating websites that not only meet but exceed expectations. My dedication to practicing data structures and algorithms helps me sharpen my problem-solving skills and tackle complex challenges with confidence.

My journey in technology is driven by a continuous desire to learn and adapt. I actively seek opportunities to expand my knowledge and prove my abilities. Alongside my technical skills, I pride myself on my effective communication abilities. I thrive on interacting with people, sharing ideas, and learning from diverse perspectives.

As I approach the end of my academic journey, I am excited to embrace new challenges and opportunities that will allow me to grow further in the field of technology.`;


export const PROJECTS = [
  {
    title: "Byte-Defender",
    image: project1,
    description:
      "It is a Windows malware detector that aims to provide a website solution that identifies and mitigates malicious website, commonly referred to as malware, on text files. Malware includes viruses, Trojans, ransomware, spyware, adware, and other malicious website that can compromise the security and functionality of a Windows computer.",
    technologies: ["HTML", "CSS", "JS", "MongoDB"],
    link: "https://github.com/Jhapragati/ByteDefender" 
  },
  {
    title: "Tic-Tac-Toe",
    image: project2,
    description:
      "This is a classic Tic Tac Toe game built with HTML, CSS, and JavaScript. The project focuses on game logic, player interaction, and responsive design, providing a simple yet engaging user experience.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://github.com/Jhapragati/Tic_Tac_Toe" 
  },
  {
    title: "Real-Time Tracker",
    image: project3,
    description:
      "This web-based real-time location tracking application, built with Node.js, Express, Socket.io, and Leaflet.js, allows users to monitor and display their locations on an interactive map. The app continuously tracks geolocations and updates the map in real-time, offering a responsive and user-friendly interface.",
    technologies: ["Node.js", "Express", "Socket.io", "Leaflet.js"],
    link: "https://github.com/Jhapragati/RealtimeTracker" 
  },
  {
    title: "To-do List",
    image: project4,
    description:
      "A simple to-do list made from react-js where you can write your task and mark it as done once completed.",
    technologies: ["ReactJs"],
    link: "https://github.com/Jhapragati/ToDo_react" 
  },
];

export const CONTACT = {
  address: "Room no-70,Hostel-shri santa Puri, Banasthali vidyapeeth",
  phoneNo: "+91 8306708837 ",
  email: "jhapragati3@gmail.com",
};