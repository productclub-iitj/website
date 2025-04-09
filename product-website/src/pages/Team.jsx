import React, { useEffect, useRef } from "react";
import "../styles/Team.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamMember = ({ role }) => {
  const memberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, []);

  return (
    <div className="team-member" ref={memberRef}>
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
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div className="team-section" ref={sectionRef}>
      <h2 className="section-title" ref={titleRef}>{title}</h2>
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
  const dualHeadsRef = useRef(null);
  const verticalHeadsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (dualHeadsRef.current) {
      observer.observe(dualHeadsRef.current);
    }

    if (verticalHeadsRef.current) {
      observer.observe(verticalHeadsRef.current);
    }

    return () => {
      if (dualHeadsRef.current) {
        observer.unobserve(dualHeadsRef.current);
      }
      if (verticalHeadsRef.current) {
        observer.unobserve(verticalHeadsRef.current);
      }
    };
  }, []);

  return (
    <div className="team-page">
      <h1 className="page-title">Meet Our Team</h1>
      
      <TeamSection title="Mentors" count={4} />
      <TeamSection title="Overall Heads" count={2} />
      
      <h2 className="section-title vertical-heads" ref={verticalHeadsRef}>Vertical Heads</h2>
      
      <TeamSection title="Events Heads" count={2} />
      
      <div className="dual-heads" ref={dualHeadsRef}>
        <div className="head-section">
          <h2 className="section-title" id="media">Media & Outreach Head</h2>
          <div className="members-grid">
            <TeamMember role="Media & Outreach Head" />
          </div>
        </div>
        
        <div className="head-section">
          <h2 className="section-title" >Design Head</h2>
          <div className="members-grid">
            <TeamMember role="Design Head" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
