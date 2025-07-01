import React, { useEffect, useState } from "react";
import "../styles/Team.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamMember = ({ name, year, role, image, email, linkedin, instagram }) => {
  return (
    <div className="team-member fade-in">
      <div className="avatar-container">
        <div className="avatar" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="role">{role}</div>
        <div className="year">{year}</div>
      </div>
      <div className="social-icons">
        {email && (
          <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamSection = ({ title, members, showTitle = true }) => {
  if (!members || members.length === 0) {
    return null;
  }

  return (
    <div className="team-section fade-in">
      {showTitle && <h2 className="section-title">{title}</h2>}
      <div className="members-grid">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/team");
        const data = await res.json();
        console.log("Fetched Team Data:", data);
        setTeamData(data);
      } catch (error) {
        console.error("Failed to fetch team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  const groupByRole = (role) => {
    return teamData.filter((member) => member.role === role);
  };

  if (loading) {
    return (
      <div className="team-page">
        <div className="loading-container">
          <div className="loading-text">Loading team data...</div>
        </div>
      </div>
    );
  }

  const mentors = groupByRole("Mentor");
  const overallHeads = groupByRole("Overall Head");
  const verticalHeads = groupByRole("Vertical Head");

  return (
    <div className="team-page">
      <h1 className="page-title">Meet Our Team</h1>
      <h2 className="pick-up">
        "Meet the minds who can turn user pain points into product love stories"
      </h2>

      {/* Mentors Section */}
      <TeamSection title="Mentors" members={mentors} />

      {/* Overall Heads Section */}
      <TeamSection title="Overall Heads" members={overallHeads} />

      {/* Vertical Heads Section */}
      <TeamSection title="Vertical Heads" members={verticalHeads} />

      {teamData.length === 0 && (
        <div className="no-data-message">
          <p>No team data available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default Team;
