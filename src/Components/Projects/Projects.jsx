import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Fake News Detection System"
          main="A machine learning-based system that classifies news articles as real or fake using NLP techniques. Also includes fake image and video detection using deep learning. 
🛠 Tech Stack: Python, NLP (NLTK, SpaCy, Transformers), OpenCV, TensorFlow, Django, ReactJS"
        />
        <ProjectCard
          title="Voice-to-Code Web Application"
          main="AI-driven tool for real-time code generation from voice input using Flask, SpeechRecognition, and CodeLlama."
        />
        <ProjectCard
          title="Tech Conference 2024 Website"
          main="Designed a responsive event website featuring a count-down timer, registration system, and smooth navigation."
        />
        <ProjectCard
          title=""
          main=""
        />
      </div>
    </div>
  );
};

export default Projects;
