import React from "react";
import "./Project.css";

const projects = [
  {
    name: "🚀 Portfolio Website",
    about: "A personal portfolio showcasing my skills, projects, and resume. This website serves as a digital representation of my professional journey, highlighting my expertise, achievements, and technical projects. It features a visually appealing and interactive UI with smooth animations, dark/light mode, and fully responsive design. The project includes dedicated sections for my skills, experience, and certifications, along with a dynamic contact form for easy communication. Optimized for performance, accessibility, and SEO, ensuring a great user experience across all devices.",
    skills: ["React", "CSS", "JavaScript", "Responsive Design", "SEO Optimization", "UI/UX Design"],
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "GitHub Pages", "Vercel"],
    languages: ["JavaScript", "HTML", "CSS"],
    platform: "Web",
    link: "#"
  },
  {
    name: "🎓 Student Course Management System",
    about: "A web-based platform that allows students to register for courses, track their progress, and manage assignments. It includes user authentication, role-based access for students and instructors, and an interactive dashboard for course management. The system features real-time updates, automated notifications, and a secure database for storing course-related information.",
    skills: ["Django", "Backend Development", "Database Management", "REST APIs"],
    technologies: ["Django", "MongoDB", "Bootstrap", "React"],
    languages: ["Python", "JavaScript", "HTML", "CSS"],
    platform: "Web",
    link: "#"
}
,
  {
    name: "🏦 Banking and Finance System",
    about: "A secure banking and finance management system that allows users to perform transactions, manage accounts, and view financial reports. It includes features such as user authentication, fund transfers, transaction history, and an admin dashboard to monitor activities. The system ensures high security using encryption and role-based access.",
    skills: ["Spring Boot", "MySQL", "Security", "RESTful APIs"],
    technologies: ["Java", "Spring Boot", "Hibernate", "Bootstrap"],
    languages: ["Java", "SQL", "HTML", "CSS"],
    platform: "Web",
    link: "#"
  },
  {
    name: "🏛️ Web App - Indian Heritage",
    about: "A web application dedicated to showcasing Indian heritage, historical sites, and cultural traditions. The app features an interactive UI, virtual tours, and detailed information about various landmarks. Users can explore different heritage sites, learn about their significance, and interact with multimedia content.",
    skills: ["Web Development", "Java Full Stack", "UI/UX Design"],
    technologies: ["HTML", "CSS", "JavaScript", "Spring Boot", "MySQL"],
    languages: ["Java", "JavaScript", "HTML", "CSS"],
    platform: "Web",
    link: "#"
  }
];

const Project = () => {
  return (
    <div className="project-container">
                <h1 className="heading">📌MY <span className="projects">PROJECTS</span></h1>
                <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="name">{project.name}</h2>
            <h3>About:</h3>
            <p>{project.about}</p>
            <h3>Skills:</h3>
            <p>{project.skills.join(", ")}</p>
            <h3>Technologies:</h3>
            <p>{project.technologies.join(", ")}</p>
            <h3>Languages:</h3>
            <p>{project.languages.join(", ")}</p>
            <h3>Platform:</h3>
            <p>{project.platform}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
