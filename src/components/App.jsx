import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ProjectCard from "./ProjectCard";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

AOS.init();

const navigation = [
  { name: "About Me", href: "#aboutme" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "/Aryan_Resume.pdf" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aryan-ved/" },
];

const projects = [
  { title: "Project 1", description: "Description of project 1", href: "/project1" },
  { title: "Project 2", description: "Description of project 2", href: "/project2" },
  { title: "Project 3", description: "Description of project 3", href: "/project3" },
];


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Glassmorphism Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 shadow-md">
        <nav className="container mx-auto flex items-center justify-between p-5">
          <a href="#" className="text-xl font-bold text-gray-900">Aryan Ved</a>
          <div className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-700 hover:text-indigo-600 transition">
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden">
            <Bars3Icon className="w-6 h-6 text-gray-900" />
          </button>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/40 z-50">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6">
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4">
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            </button>
            <div className="mt-10 space-y-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block text-lg text-gray-800 hover:text-indigo-600">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Dialog>
      </header>

      <section className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6 overflow-hidden">
        {/* Floating 3D Particles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2)_0%,_transparent_70%)]"></div>
        </div>

        {/* 3D Motion Effect */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Typing Animation */}
          <h1 className="text-5xl font-extrabold sm:text-7xl drop-shadow-lg">
            <span className="text-white">
              <Typewriter
                options={{
                  strings: ["Welcome to My Portfolio", "My name is Aryan Ved", "I am a 3rd Year Computer Science Student at Ontario Tech University"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="mt-6 text-lg sm:text-xl max-w-2xl"
        >
          Discover my journey, projects, and professional experience.
        </motion.p>
        
      </section>

      <section id="aboutme" className="py-20 bg-gradient-to-br from-purple-400 to-purple-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
          <div className="flex flex-col md:flex-row items-center mt-8 space-y-6 md:space-y-0">
            <img src="/profile.jpg" alt="Aryan Ved" className="w-40 h-40 rounded-full shadow-lg" />
            <p className="text-lg text-gray-700 md:ml-6">
              I'm Aryan Ved, a passionate software engineer specializing in modern web development. I love solving complex problems and building efficient applications.
            </p>
          </div>

          {/* Skills Section */}
          <h3 className="text-3xl font-semibold mt-10">Skills</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "/images/C++.png", alt: "C++" },
              { src: "/images/C.png", alt: "C" },
              { src: "/images/python.png", alt: "Python" },
              { src: "/images/java.png", alt: "Java" },
              { src: "/images/dart.png", alt: "Dart" },
              { src: "/images/react.webp", alt: "React" },
              { src: "/images/flutter.png", alt: "Flutter" },
              { src: "/images/SQL.png", alt: "PostgreSQL" },
              { src: "/images/numpy.svg", alt: "NumPy" },
              { src: "/images/pandas.png", alt: "Pandas" },
              { src: "/images/scipy.png", alt: "SciPy" },
              { src: "/images/node.png", alt: "Node.js" },
              { src: "/images/mongodb.webp", alt: "MongoDB" },
              { src: "/images/matplotlib.png", alt: "Matplotlib" },
              { src: "/images/html.png", alt: "HTML" },
              { src: "/images/css.svg", alt: "CSS" },
            ].map(({ src, alt }) => (
              <div key={alt} className="flex justify-center items-center">
                <motion.img 
                  src={src} 
                  alt={alt} 
                  className="w-30 h-30 object-contain"
                  whileHover={{ scale: 1.1 }} 
                />
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <section id="experience-education">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h3 className="mt-20 text-5xl font-semibold">Experience</h3>
              <div className="space-y-6 mt-10">
                <div className="p-4 border border-gray-300 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold">Web Developer at Gross Innovations</h4>
                  <p className="text-gray-700">Jan 2025 - Present</p>
                  <p className="mt-5">
                    Developed and deployed advanced financial calculators, including Burn Rate, Runway, Customer Acquisition Cost (CAC), and Lifetime Value (LTV), to support data-driven decision-making for startups and businesses.
                  <p className="mt-2"></p>
                   Engineered a dynamic web application with React.js for an intuitive and responsive front-end, while leveraging MongoDB for a scalable and efficient back-end database.
                  <p className="mt-2"></p>
                   Worked within an Agile development team to enhance UI/UX workflows, optimize front-end performance, and integrate APIs for seamless data exchange and user interaction.</p>
                </div>
                <div className="p-4 border border-gray-300 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold">Junior Developer at ABC Corp</h4>
                  <p className="text-gray-700">2021 - 2023</p>
                  <p className="mt-2">Assisted with application development and testing.</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className="mt-12">
              <h3 className="text-5xl font-semibold">Education</h3>
              <div className="space-y-6 mt-6">
                <div className="p-4 border border-gray-300 rounded-lg shadow-md">
                  <h4 className="text-2xl font-semibold">Bachelor of Science - Computer Science </h4>
                    <p className="text-2xl font-light" >Ontario Tech University </p>
                  <p className="text-gray-700">2022 - 2026</p>
                  <p className="mt-2">Relevant Courses: </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Projects Section */}
      <Projects/>
    </div>
  );
}
