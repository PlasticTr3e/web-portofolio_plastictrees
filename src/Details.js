// Enter all your detials in this file

// Profile Image
import profile from "./assets/fotoprofile.jpg";

// Tech stack images
import js from "./assets/techstack/js.png";
import csharp from "./assets/techstack/csharp.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import laravel from "./assets/techstack/laravel.png"
import vs from "./assets/techstack/vs.png"
import lua from "./assets/techstack/lua.png";
import express from "./assets/techstack/express.png";
import figma from "./assets/techstack/figma.png";
import python from "./assets/techstack/python.png";
import java from "./assets/techstack/java.png";
import opengl from "./assets/techstack/opengl.png";
import cpp from "./assets/techstack/cpp.png";
import docker from "./assets/techstack/docker.png";
import react from "./assets/techstack/react.png";

// Porject Image
import Soeharto from "./assets/projects/Soeharto.png";
import projectImageunpad from "./assets/projects/unpad.png";
import RobotSoccer from "./assets/projects/Robot.jpeg";
import Iot from "./assets/projects/Iot.png";


// Enter your Personal Details here
export const personalDetails = {
  name: "Bagas Diatama Wardoyo",
  tagline: "\"Bersama paria kita berjalan\"",
  img: profile,
  about: "I'm Bagas Diatama. Currently pursuing my degree at Universitas Padjadjaran, I am a developer focused on AI, computer graphics, and network infrastructure. I thrive on the synergy of team-based projects and enjoy contributing innovative solutions to complex, real-world problems. I’m a collaborative learner who believes that we achieve the most when we grow and share our technical insights together.",
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/bagas-wardoyo-a79359354/",
  github: "https://github.com/PlasticTr3e",
  instagram: "https://www.instagram.com/diatamabagas/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Laboratory Teaching Assistant",
    Company: `Department of Computer Science Unpad`,
    Location: "Jatinangor",
    Type: "Part Time",
    Duration: "Feb 2025 - Dec 2025",
  },
  {
    Position: "Chairman of the Student Representative Council",
    Company: `DPA HIMATIF FMIPA Unpad`,
    Location: "Jatinangor",
    Type: "Organization",
    Duration: "Dec 2024 - Dec 2025",
  },
  {
    Position: "Educational Simulation Developer (Intern)",
    Company: `Center for Innovation in Teaching and Learning (PIPP) Unpad`,
    Location: "Jatinangor",
    Type: "Internship",
    Duration: "Oct 2025 - Jan 2026",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Computer Science",
    Company: "Universitas Padjadjaran",
    Location: "Jatinangor, West Java",
    Type: "College",
    Duration: "August 2023 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  csharp: csharp,
  opengl: opengl,
  cpp: cpp,
  python:python,
  java:java,
  lua: lua,
  js: js,
  vscode: vscode,
  vs: vs,
  express:express,
  laravel:laravel,
  docker:docker,
  git: git,
  github: github,
  figma: figma,
  tailwind: tailwind,
  react: react,
  npm: npm,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Educational Simulation Roblox Developer, PIPP Unpad",
    image: projectImageunpad,
    description: `Developed core game mechanics and interactivity using Lua, implementing complex scripts for educational simulations within a 3D campus environment.`,
    techstack: "Roblox Studio, Blender, Lua",
    previewLink: "https://www.roblox.com/share?code=ab2b40436e5c7e4cb434e772a46c5dcb&type=ExperienceDetails&stamp=1772304214544",
    githubLink: "",
    type: "game"
  },
  {
    title: "Soeharto National Hero Sentiment Analysis",
    image: Soeharto,
    description: `Developed a sentiment analysis system to analyze public opinion on whether Soeharto (Indonesia's second president) should be designated as a National Hero (Pahlawan Nasional). Collected and analyzed YouTube comments to gauge public sentiment using dual-approach classification: manual lexicon-based labeling and AI-powered transformer models (IndoBERT) for comparison.`,
    techstack: "Python, YouTube Data API, Transformers (HuggingFace), Sastrawi (Indonesian NLP), Pandas, Matplotlib, WordCloud",
    previewLink: "https://github.com/PlasticTr3e/soeharto_pahlawan_sentiment_analysis",
    githubLink: "https://https://github.com/PlasticTr3e/soeharto_pahlawan_sentiment_analysis.com",
    type: "game"
  },
  {
    title: "Smart Ball Follower Robot with Object Detection",
    image: RobotSoccer,
    description: `Developed an autonomous robot capable of detecting and following a soccer ball in real-time. Integrated advanced Computer Vision algorithms using the Ultralytics YOLOv8 library with custom-trained weights for high-accuracy ball detection and tracking. Features automatic distance-based stopping when the robot reaches the ball.`,
    techstack: "Python, Arduino, YOLOv8, OpenCV, Serial Communication",
    previewLink: "https://github.com/PlasticTr3e/Robot-Soccer",
    githubLink: "https://github.com/PlasticTr3e/Robot-Soccer",
    type: "game"
  },
  {
    title: "Smart Home IoT System with Blynk",
    image: Iot,
    description: `Developed an IoT-based smart home automation system capable of monitoring and controlling home appliances remotely in real-time. Integrated temperature and humidity monitoring using DHT22 sensor with automatic AC control when temperature exceeds 28°C. Features motion detection using PIR sensor for security alerts and remote LED control through the Blynk mobile application. The system provides real-time data visualization and notifications via the Blynk dashboard.`,
    techstack: "Cisco Packet Tracer",
    previewLink: "https://github.com/PlasticTr3e/IOT_SmartHome",
    githubLink: "https://github.com/PlasticTr3e/IOT_SmartHome",
    type: "game"
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "diatama.w8@gmail.com",
  phone: "+62 8515 6385 243",
};
