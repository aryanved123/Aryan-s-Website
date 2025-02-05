import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Cybersecurity Awareness Game",
    description: "An interactive game to educate users about phishing attacks.",
    image: "/images/cybersecurity.jpg",
    link: "/projects/cybersecurity-game",
  },
  {
    title: "Grade Management App",
    description: "A web app for managing student grades using SQLite.",
    image: "/images/grades-app.jpg",
    link: "/projects/grade-management",
  },
  {
    title: "Exotic Car Rental",
    description: "A sleek UI for booking high-end sports cars online.",
    image: "/images/car-rental.jpg",
    link: "/projects/exotic-cars",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
        <p className="mt-6 text-lg text-gray-500">
          Here are some of the exciting projects I have worked on.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="mt-10"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="flex justify-center">
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
