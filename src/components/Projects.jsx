import React from 'react';
import './styles/Projects.css';

const projectsData = [
    {
        title: "Event Powerhouse",
        description: "Successfully planned and executed over 100 (virtual & physical) events, ensuring seamless logistics and attendee satisfaction.",
        image: "/assets/events.jpg", // Replace with actual image paths
      },
      {
        title: "LinkedIn Ghost Writer",
        description: "Crafted over 100 professional LinkedIn profiles and posts, driving visibility and engagement for clients across industries.",
        image: "/assets/gho.jpg",
      },
      {
        title: "Brand Manager",
        description: "Developed and managed branding strategies that increased brand recognition by 70% for multiple startups.",
        image: "/assets/brand.jpg",
      },
      {
        title: "Content Manager",
        description: "Produced high-quality content for blogs, websites, and social media, growing client reach and engagement by 150%.",
        image: "/assets/conn.jpg",
      },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Achievements</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
