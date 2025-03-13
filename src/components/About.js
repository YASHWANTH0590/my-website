import React from 'react';
import './About.css';
import myphoto from '../images/myphoto.JPEG';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading"> 💡ABOUT <span className="highlight">ME</span></h1>

      {/* Profile Section */}
      <div className="about-profile">
        <div className="profile-image">
          <img src={myphoto} alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>G Sai Dattu Yaswanth</h2>
          <p><strong>Phone no:</strong> +91 6303073312</p>
          <p><strong>Mail:</strong> ganugapatiyaswanth@gmail.com</p>
          <p><strong>Age:</strong> 20</p>
          <p><strong>Work:</strong> Student at KL University</p>
          <p><strong>College:</strong> KL University</p>
          <p><strong>Department:</strong> Computer Science and Engineering (AI & IPA)</p>
          <p><strong>Current Year:</strong> 3rd Year</p>
          <p><strong>Languages:</strong> English (Proficient), Hindi (Fluent), Telugu (Native)</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="about-cards">
        <div className="about-card">
          <h3>Technical Skills 💻</h3>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>MERN Stack</li>
            <li>Spring Boot</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Web Development</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Internships 🏆</h3>
          <ul>
            <li>AIML through AWS</li>
            <li>AIML through Google</li>
            <li>Web Development - Prodigy InfoTech</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Projects 🚀</h3>
          <ul>
            <li>Indian Heritage Web App (JFSD)</li>
            <li>Online Bidding System (PFSD)</li>
            <li>Banking & Finance System (MSWD)</li>
            <li>Solar Plant Forecasting using ML</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Certifications 📜</h3>
          <ul>
            <li>AWS Certified Practitioner (AWS-CP)</li>
            <li>Microsoft Azure AI-900</li>
            <li>Google Cloud AI Essentials</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <h2 className="education-heading">Education 🎓</h2>
      <div className="education-container">
        <div className="education-box">
          <h4>B.Tech in AI & IPA</h4>
          <p>KL University (2022 - 2026)</p>
        </div>
        <div className="education-box">
          <h4>Intermediate</h4>
          <p>Sri Sarada Junior College</p>
        </div>
        <div className="education-box">
          <h4>Schooling</h4>
          <p>Sri Vijana Vihara EM High School</p>
        </div>
      </div>

      {/* Resume Section */}
      <div className="download-container">
        <a href="/Final resume.pdf" className="download-btn" download>📥 Download Resume</a>
        <a href="/Final resume.pdf" className="download-btn" target="_blank" rel="noopener noreferrer">👀 View Resume</a>
      </div>
    </div>
  );
}
