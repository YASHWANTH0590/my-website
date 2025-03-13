import React from 'react';
import './Certifications.css';

// Import certificate images
import cert1 from '../images/cert1.jpg';
import cert2 from '../images/cert2.jpg';
import cert3 from '../images/cert3.jpg';
import cert4 from '../images/cert4.jpg';

const certifications = [
    {
        image: cert1,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "February 15, 2025",
        description: "Gained foundational knowledge of AWS cloud concepts, core services, security, pricing models, and cloud architecture best practices.",
        link: "https://www.credly.com/badges/f3161f34-1f7d-4bd4-ac24-10f040b3a0dd/public_url"
    },
    {
        image: cert2,
        title: "Red Hat Certified Enterprise Application Developer (EX183)",
        issuer: "Red Hat",
        date: "November 9, 2024",
        description: "Successfully completed the Red Hat EX183 exam, demonstrating expertise in building and deploying enterprise-ready applications using Java EE technologies.",
        link: "https://www.credly.com/badges/c4dc29e8-fd50-495f-bd93-c884d0be74e5/public_url"
    },
    {
        image: cert3,
        title: "Salesforce Certified AI Associate",
        issuer: "Salesforce",
        date: "October 18, 2024",
        description: "Earned the Salesforce AI Associate certification, validating my understanding of AI concepts, responsible AI use, and how AI enhances Salesforce applications.",
        link: "https://1drv.ms/b/c/070e510fad8efc3d/EaIQSOqZy0FCi5RhW3VK1PwBI6pZ4vRzg7qUbf63yIxTUw?e=28sona"
    },
    {
        image: cert4,
        title: "Automation Anywhere Certified Advanced RPA Professional",
        issuer: "Automation Anywhere",
        date: "October 2, 2024",
        description: "Achieved the Advanced RPA Professional certification, showcasing my skills in designing, building, and deploying advanced automation solutions using the Automation Anywhere platform.",
        link: "https://1drv.ms/b/c/070e510fad8efc3d/EVP4i8Rq7XJOvuqvSTMBKw0BH9ZvO2wVRf8jyeReUSZouQ?e=lnx07N"
    }
];

const Certifications = () => {
    return (
        <div className="certifications-container">
            {/* Heading with different colors */}
            <h1 className="certifications-heading">
                <span className="blue-text">🏆 MY</span> <span className="white-text">CERTIFICATES</span>
            </h1>

            {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                    <div className="certificate-details">
                        <h2>{cert.title}</h2>
                        <p><strong>Issued By:</strong> {cert.issuer}</p>
                        <p><strong>Date:</strong> {cert.date}</p>
                        <p>{cert.description}</p>
                    </div>

                    <div className="certificate-right">
                        <img src={cert.image} alt={cert.title} className="certificate-image" />
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="view-certificate-link"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certifications;
