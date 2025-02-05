import React from 'react'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div className="about-me-section py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6">
          I'm a passionate software engineer with a love for creating innovative solutions. 
          I specialize in web development and enjoy working with the latest technologies.
        </p>
        <p className="text-lg mb-6">
          With a strong foundation in computer science, I love tackling complex problems and building applications that improve people's lives.
        </p>
        <Link to="/" className="btn btn-secondary mx-2">Back to Home</Link>
      </div>
    </div>
  )
}

export default AboutMe
