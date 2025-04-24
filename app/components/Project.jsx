
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Aniket Hospital",
      description: "Aniket Hospital’s website offers a user-friendly platform for booking medical appointments online. It provides an easy and convenient way for patients to schedule appointments with doctors across various specialties.",
      image: "/images/aniket_hos.png",
      tag: ["All", "Web"],
      gitUrl: "https://aniket-hospital.vercel.app/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "DSA Visualization",
      description: "The project is a web application that showcases various Data Structures and Algorithms (DSA) implemented in JavaScript. It organizes these topics into categories, each containing interactive modules that help users understand the implementation and functionality of each data structure and algorithm. The platform aims to provide an engaging way to explore and learn DSA concepts.",
      image: "/images/DSA.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Rohandede1825/dsa-frontend",
      previewUrl: "https://dsa-frontend-rosy.vercel.app/",
    },
    {
      id: 3,
      title: "RentNow",
      description: "Full-Stack RentNow is a web application designed to facilitate the process of renting properties. It allows property owners to list their homes and offices, while customers can easily browse through available rental options.",
      image: "/images/RentNow.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/rishiSurya9/rentnow",
      previewUrl: "https://rentnow-indol.vercel.app/",
    },
    {
      id: 4,
      title: "QR Code Generator",
      description: "The QR Code Generator project allows users to create custom QR codes by inputting content and selecting the size (from 100x100 to 1000x1000 pixels). Once generated, users can download the QR code for various uses. This tool simplifies creating scannable codes for personal or professional purposes.",
      image: "/images/QR_Code.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/rishiSurya9/QR-generator",
      previewUrl: "https://qr-generator-blush-iota.vercel.app/",
    },
    {
      id: 5,
      title: "AI ChatBot",
      description: "The ChatBot project is a conversational AI system using Natural Language Processing (NLP) and neural networks. It features a graphical user interface (GUI) for user interaction and voice automation for hands-free use. The chatbot responds to queries via a trained neural network model, built using technologies like Python, Tkinter, TensorFlow/Keras, and NLP libraries such as NLTK.",
      image: "/images/chat.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/rishiSurya9/ChatBot",
      previewUrl: "https://github.com/rishiSurya9/ChatBot",
    },
    {
      id: 6,
      title: " Climatic Insights",
      description: "The weather application provides real-time weather updates based on user input. It displays details like temperature, humidity, wind speed, and weather conditions. The app is designed to offer an easy-to-use interface for checking weather data for any location, keeping users informed about current weather conditions.",
      image: "/images/WeatherApp.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/rishiSurya9/weatherApp",
      previewUrl: "https://weather-app-two-phi-83.vercel.app/",
    },
  ];

const Project = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const handleTagChange = (newTag) => {
        setTag(newTag);
      };
      const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
      );
      const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
  return (
   <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project,index) => (
           <motion.li
           key={index}
           variants={cardVariants}
           initial="initial"
           animate={isInView ? "animate" : "initial"}
           transition={{ duration: 0.3, delay: index * 0.4 }}
         >
          
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
         </motion.li>
        ))}
      </ul>
      </section>
  )
}

export default Project
