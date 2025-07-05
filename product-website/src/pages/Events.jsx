import React, { useState, useEffect, useRef } from "react";
import "../styles/Events.css";

const typeIcons = {
  workshop: "🔧",
  speaker: "🎤",
  competition: "🏆",
  cohort: "👥"
};

const Events = () => {
  const [eventData, setEventData] = useState({ past: [], upcoming: [] });
  const [activeTab, setActiveTab] = useState("past");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);

  const timelineRef = useRef(null);
  const progressLineRef = useRef(null);
  const dotRefs = useRef([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/events"); // adjust if deployed
        const data = await res.json();

        const past = data.filter(event => event.category === "past");
        const upcoming = data.filter(event => event.category === "upcoming");

        setEventData({ past, upcoming });
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progressLine = progressLineRef.current;

      if (!timeline || !progressLine) return;

      const dots = dotRefs.current;
      if (!dots || dots.length === 0 || !dots.some(Boolean)) {
        progressLine.style.height = "0px";
        return;
      }

      let minDist = Infinity;
      let closestIdx = 0;
      const viewportCenter = window.innerHeight / 2;

      dots.forEach((dot, idx) => {
        if (dot) {
          const rect = dot.getBoundingClientRect();
          const dotCenter = rect.top + rect.height / 2;
          const dist = Math.abs(dotCenter - viewportCenter);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        }
      });

      if (dots[closestIdx]) {
        const timelineRect = timeline.getBoundingClientRect();
        const dotRect = dots[closestIdx].getBoundingClientRect();
        const offset = dotRect.top + dotRect.height / 2 - timelineRect.top;
        progressLine.style.height = `${offset}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeTab, eventData[activeTab].length]);

  const tabLabels = [
    { key: "past", label: "Past Events", count: eventData.past.length },
    { key: "upcoming", label: "Upcoming Events", count: eventData.upcoming.length },
  ];

  const currentEvents = eventData[activeTab];

  if (loading) {
    return (
      <div className="events-root">
        <div className="events-header">
          <h1>Loading Events...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="events-root">
      {/* Header Section */}
      <div className="events-header">
        <h1>Events at</h1>
        <h1 className="highlight floating-animation">The Product Club</h1>
        <p className="events-desc">
          At Product Club, we host events that inspire learning, collaboration, and real-world product thinking. 
          From workshops and speaker sessions to hackathons, there's something for everyone passionate about building great products.
          <br />
          <span className="highlight-text">Check out the respective pages below for more!</span>
        </p>

        {/* Tabs */}
        <div className="events-tabs">
          {tabLabels.map((tab) => (
            <button
              key={tab.key}
              className={`events-tab ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              <span className="events-tab-count">{tab.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="events-timeline" ref={timelineRef}>
        <div
          className="timeline-progress-line"
          ref={progressLineRef}
          style={{ height: "0px" }}
        />

        {currentEvents.length === 0 ? (
          <div className="no-events">
            <div className="no-events-icon">🚀</div>
            <div className="no-events-title">
              Upcoming exciting events...
            </div>
            <div className="no-events-subtitle">
              Stay tuned for amazing product management experiences!
            </div>
          </div>
        ) : (
          <div className="timeline-events">
            {currentEvents.map((event, idx) => (
              <div
                key={idx}
                className="timeline-row"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="timeline-connector">
                  <div
                    className={`timeline-dot ${hoveredCard === idx ? "active dot-pulse" : ""}`}
                    ref={(el) => (dotRefs.current[idx] = el)}
                  >
                    {hoveredCard === idx && (
                      <div className="timeline-dot-pulse" />
                    )}
                  </div>
                </div>

                <div className={`timeline-card ${hoveredCard === idx ? "glow-effect" : ""}`}>
                  <div className="timeline-card-inner">
                    <div className="timeline-card-header">
                      <div className="event-type-badge">
                        {typeIcons[event.type]}{" "}
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </div>
                      <div className="timeline-date">{event.date}</div>
                    </div>

                    <h3 className="timeline-title">{event.title}</h3>
                    <p className="timeline-description">{event.description}</p>

                    <div className="timeline-card-footer">
                      <span>Learn more</span>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
