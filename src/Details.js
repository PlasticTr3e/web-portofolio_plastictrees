// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/fotoprofile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import laravel from "./assets/techstack/laravel.png"
import postman from "./assets/techstack/postman.png";
import express from "./assets/techstack/express.png";
import figma from "./assets/techstack/figma.png";
import python from "./assets/techstack/python.png";
import java from "./assets/techstack/java.png";
// Porject Image
import projectImage1 from "./assets/projects/purbaya.png";
import projectImageunpad from "./assets/projects/unpad.png";
import projectImage2 from "./assets/projects/mbg.png";
import projectImage3 from "./assets/projects/halodoc.png";
import projectImage4 from "./assets/projects/robot.png";
import projectImage6 from "./assets/projects/cisco.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Hamud Abdul Aziz",
  tagline: "In this world of fiction, I will bestow",
  img: profile,
  about: `I am an undergraduate Computer Science student at Universitas Padjadjaran with strong interests in data, artificial intelligence, back-end development, and computer networks. I enjoy building and analyzing systems that solve real-world problems, whether through intelligent models, scalable backend architecture, or end-to-end application development. Driven by curiosity and continuous learning, I thrive in collaborative environments where I can contribute practical solutions, explore emerging technologies, and grow alongside others.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/hamud-abdul-aziz",
  github: "https://www.github.com/abdazizhamud",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/abdazizhamud",
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
    Position: "Backend Lead & Co–Vice Consultant Team",
    Company: `Research Analysis and Technology Bureau, BEM Kema FMIPA Unpad`,
    Location: "Jatinangor",
    Type: "Organization",
    Duration: "May 2025 - Jan 2026",
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
  html: html,
  css: css,
  js: js,
  laravel:laravel,
  react: react,
  redux: redux,
  tailwind: tailwind,
  vscode: vscode,
  java:java,
  express:express,
  python:python,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Educational Simulation Roblox Developer, PIPP Unpad",
    image: projectImageunpad,
    description: `Contributed to the development of a full-scale 3D campus simulation environment representing Universitas Padjadjaran for educational and visualization purposes.`,
    techstack: "Roblox Studio, Blender, Lua",
    previewLink: "#",
    githubLink: "#",
    type: "web"
  },
  {
    title: "Sentiment Analysis of the Rupiah Redenomination Policy by the Minister of Finance Purbaya",
    image: projectImage1,
    description: `Analyzed 1,449 public YouTube comments to assess sentiment toward Indonesia’s rupiah redenomination policy\nDemonstrated the use of NLP for public opinion monitoring and policy communication evaluation.`,
    techstack: "Python, Pandas, Numpy, Scikit-Learn",
    previewLink: "https://www.linkedin.com/in/hamud-abdul-aziz/details/projects/1114447006/multiple-media-viewer/?profileId=ACoAAEI-_GoB3ypXCZMHxvemZ_uG_406-ucJnNI&treasuryMediaId=1770640973093",
    githubLink: "https://github.com",
    type: "report"
  },
  {
    title: "Prediksi Kapasitas Pasokan Hasil Laut Nasional untuk Mendukung Program Makan Bergizi Gratis",
    image: projectImage2,
    description: `Integrated and standardized provincial marine capture fisheries data (2017–2024) and conducted EDA to analyze production trends and regional disparities.\nApplied K-Means clustering (Silhouette Score validated) to classify provinces into surplus and deficit groups, identifying distribution and logistics gaps.`,
    techstack: "Python, Pandas, Numpy, Scikit-Learn",
    previewLink: "https://www.linkedin.com/in/hamud-abdul-aziz/details/projects/1770828119826/single-media-viewer/?profileId=ACoAAEI-_GoB3ypXCZMHxvemZ_uG_406-ucJnNI",
    githubLink: "https://github.com",
    type: "report"
  },
  {
    title: "Analisis Sentimen Ulasan Aplikasi Halodoc Menggunakan Model Convolutional Neural Network (CNN) dengan Metode Lexicon-Based Labeling",
    image: projectImage3,
    description: `Collected 10,000 Halodoc user reviews from Google Play Store (7,332 unique after deduplication) and performed Indonesian NLP preprocessing (cleaning, normalization, tokenization, stopword removal, stemming with Sastrawi).`,
    techstack: "Python, Pandas, Numpy, Scikit-Learn",
    previewLink: "https://www.linkedin.com/in/hamud-abdul-aziz/details/projects/1015323141/multiple-media-viewer/?profileId=ACoAAEI-_GoB3ypXCZMHxvemZ_uG_406-ucJnNI&treasuryMediaId=1753361980149",
    githubLink: "https://github.com",
    type: "report"
  },
  {
    title: "Smart Follower Robot with Face Recognition",
    image: projectImage4,
    description: `Developed an autonomous robot capable of detecting and following a specific human face in real-time. Integrated advanced Computer Vision algorithms using the InsightFace library (ArcFace model) for high-accuracy face detection and recognition.`,
    techstack: "Python, Arduino Uno, Insight Face",
    previewLink: "https://google.com",
    githubLink: "https://github.com/mfachri820/RobotikaFaceRecognition",
    type: "report"
  },
  {
    title: "Simulasi Jaringan Virtualisasi untuk Layanan Telematika Perancangan dan Implementasi Virtual Network....",
    image: projectImage6,
    description: `This project implements a star topology and virtualization using Cisco Packet Tracer to overcome the limitations of the previous bus network in the Radio Building, successfully enhancing reliability and security through VLAN segmentation and Inter-VLAN routing.`,
    techstack: "Cisco Packet Tracer",
    previewLink: "https://docs.google.com/document/d/1z2Zkm-irmFkwuSRyyXZsxKv2Il5CeVLOWOK_LGTaxO8/edit?usp=sharing",
    githubLink: "https://github.com",
    type: "report"
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "abdulazizhamud@gmail.com",
  phone: "+62 897 8336 432",
};
