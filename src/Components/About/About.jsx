import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Full Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Adarsh A Inamdar is a proficient full stack developer specializing in the MERN stack. With expertise in React.js, Node.js, Express.js, and MongoDB, he builds scalable web applications. His knowledge extends to front-end and back-end development, API integration, and performance optimization.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Cybersecurity Specialist
                </h1>
                <p className="text-sm md:text-md leading-tight">
                A certified cybersecurity expert, Adarsh has skills in network security, risk analysis, vulnerability assessment, and incident response. He holds certifications like Cyber Guru in Cyber Defence and Cyber Samurai in Cyber Defence, with expertise in cloud security, DLP, and application security architecture.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                AI/ML Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Passionate about artificial intelligence and machine learning, Adarsh is working on projects like Fake News Detection using NLP and AI-powered automation. His tech stack includes TensorFlow, PyTorch, NLP libraries (SpaCy, NLTK), and deep learning models for advanced AI applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
