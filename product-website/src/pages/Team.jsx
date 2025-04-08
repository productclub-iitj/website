import React from "react";
import "../styles/Team.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamMember = ({ role }) => {
  return (
    <div className="team-member">
      <div className="avatar-container">
        <div className="avatar"></div>
      </div>
      <div className="info">
        <div className="name">Name</div>
        <div className="year">Year/Alum</div>
      </div>
      <div className="social-icons">
        <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
    </div>
  );
};

const TeamSection = ({ title, count }) => {
  return (
    <div className="team-section">
      <h2 className="section-title">{title}</h2>
      <div className="members-grid">
        {Array(count)
          .fill()
          .map((_, index) => (
            <TeamMember key={index} role={title} />
          ))}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="team-page">
      <h1 className="page-title">Meet Our Team</h1>
      
      <TeamSection title="Mentors" count={4} />
      <TeamSection title="Overall Heads" count={2} />
      
      <h2 className="section-title vertical-heads">Vertical Heads</h2>
      
      <TeamSection title="Events Heads"  count={2} />
      
      <div className="dual-heads">
        <div className="head-section">
          <h2 className="section-title" id="media">Media & Outreach Head</h2>
          <div className="members-grid">
            <TeamMember role="Media & Outreach Head" />
          </div>
        </div>
        
        <div className="head-section">
          <h2 className="section-title" id="media">Design Head</h2>
          <div className="members-grid">
            <TeamMember role="Design Head" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
