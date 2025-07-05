import React, { useState, useEffect } from "react";
import "../styles/Alumni.css";

const placeholderImg = "https://via.placeholder.com/160?text=Photo";
const linkedinLogo = "https://cdn-icons-png.flaticon.com/512/174/174857.png";

const Alumni = () => {
  const [alumniList, setAlumniList] = useState([]);
  const [selectedYear, setSelectedYear] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/alumni");
        const data = await res.json();
        setAlumniList(data);
      } catch (error) {
        console.error("Failed to fetch alumni data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  const years = Array.from(new Set(alumniList.map((a) => a.year))).sort((a, b) => b - a);

  const filteredAlumni =
    selectedYear === "All"
      ? alumniList
      : alumniList.filter((alumnus) => alumnus.year === selectedYear);

  if (loading) {
    return (
      <div className="alumni-page">
        <div className="loading-container">
          <div className="loading-text">Loading alumni data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="alumni-page">
      <div className="alumni-hero">
        <h1 className="alumni-title">Our Alumni</h1>
        <h2 className="alumni-subtitle">In PM and Beyond</h2>
        <p className="alumni-desc">
          The Product Club at IIT Jodhpur takes pride in our alumni who are now thriving in top product management and allied roles across leading global organizations.
          <br />
          We recognise all those who inspired us.
        </p>

        <div className="alumni-dropdown-container">
          <button
            className="alumni-dropdown-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedYear === "All" ? "Explore All Years" : `Class of ${selectedYear}`}
            <span className="dropdown-arrow">{dropdownOpen ? "▲" : "▼"}</span>
          </button>
          {dropdownOpen && (
            <div className="alumni-dropdown-list">
              <div
                className={`alumni-dropdown-item${selectedYear === "All" ? " selected" : ""}`}
                onClick={() => {
                  setSelectedYear("All");
                  setDropdownOpen(false);
                }}
              >
                All Years
              </div>
              {years.map((year) => (
                <div
                  key={year}
                  className={`alumni-dropdown-item${selectedYear === year ? " selected" : ""}`}
                  onClick={() => {
                    setSelectedYear(year);
                    setDropdownOpen(false);
                  }}
                >
                  Class of {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="alumni-grid">
        {filteredAlumni.map((alumnus, idx) => (
          <div className="alumni-card" key={idx}>
            <img
              className="alumni-img"
              src={alumnus.photo}
              alt={alumnus.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderImg;
              }}
            />
            <div className="alumni-name">{alumnus.name}</div>
            <div className="alumni-company">
              {alumnus.company ? alumnus.company : ""}
            </div>
            <div className="alumni-year-linkedin">
              <span className="alumni-year">Class of {alumnus.year}</span>
              <a
                className="alumni-linkedin-inline"
                href={alumnus.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile of ${alumnus.name}`}
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className="linkedin-logo-inline"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
