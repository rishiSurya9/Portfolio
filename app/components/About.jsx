"use client"
import React from 'react'
import  {useTransition, useState}  from "react";
import Image from 'next/image'
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Express</li>
        <li>Node js</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-stack Web development</li>
        <li>MGM's College of CS and IT</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Internship in Web Development </li>
        <li>Artificial Intelligence Training</li>
        <li>Campus Ambassador</li>
        <li> Software	Engineering	Job	Simulation</li>
      </ul>
    ),
  },
];
const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };


  return (
    <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <img src="/images/about-img.png" width={500} height={500} />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
      <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a full stack web developer with expertise in HTML, CSS, JavaScript,
           React.js, Express, Node.js, and SQL. 
           I also have skills in Java and Python and am passionate about Artificial Intelligence. I am a quick learner who enjoys expan
           ding my knowledge and skill set. I am a team player, exci
           ted to collaborate with others to create in
   
          novative and impactful applications
          </p>
          <div className="flex flex-row justify-start mt-8">
          <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        </div>
        </section>
  )
}

export default About
