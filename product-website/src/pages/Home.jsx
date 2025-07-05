import '../styles/Home.css';
import teamImage from '../images/team.jpeg';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section with Modern Glass Effect */}
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-subtitle">Welcome to</span>
            <h1 className="hero-title">
              The Product Club
              <span className="hero-accent">.</span>
            </h1>
            <p className="hero-description">
              Building the future of product management through innovation, collaboration, and excellence.
            </p>
            {/* <div className="hero-cta">
              <button className="cta-button primary">Join Us</button>
              <button className="cta-button secondary">Learn More</button>
            </div> */}
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>

      {/* Modern Photo Gallery Section */}
      <div className="photos-section">
        <div className="section-header">
          <h2 className="section-title">Our Journey</h2>
          <div className="section-divider"></div>
        </div>
        <div className="photos-container">
          <div className="photo-card">
            <div className="photo-wrapper">
              <img src={teamImage} alt="Product team collaborating" />
              <div className="photo-overlay">
                <span className="photo-label">Team Collaboration</span>
              </div>
            </div>
          </div>
          <div className="photo-card">
            <div className="photo-wrapper">
              <img src={teamImage} alt="Product design session" />
              <div className="photo-overlay">
                <span className="photo-label">Design Sessions</span>
              </div>
            </div>
          </div>
          <div className="photo-card">
            <div className="photo-wrapper">
              <img src={teamImage} alt="Team meeting" />
              <div className="photo-overlay">
                <span className="photo-label">Strategic Meetings</span>
              </div>
            </div>
          </div>
          <div className="photo-card">
            <div className="photo-wrapper">
              <img src={teamImage} alt="Product presentation" />
              <div className="photo-overlay">
                <span className="photo-label">Presentations</span>
              </div>
            </div>
          </div>
          <div className="photo-card">
            <div className="photo-wrapper">
              <img src={teamImage} alt="Product presentation" />
              <div className="photo-overlay">
                <span className="photo-label">Presentations</span>
              </div>
            </div>
          </div>
          <div className="photo-card">
            <div className="photo-wrapper">
              <img src={teamImage} alt="Product presentation" />
              <div className="photo-overlay">
                <span className="photo-label">Presentations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Info Section */}
      <div className="info-section">
        <div className="info-container">
          <div className="info-card">
            <div className="info-icon">
              <div className="icon-circle">
                <span className="icon">👥</span>
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">Who We Are</h2>
              <p className="info-description">
                The Product Club, IIT Jodhpur aims to build a community that can work with the synergy of tech, UX and design. It was founded with the vision to provide proper guidance to those aspiring to build a career in off-tech domains, particularly Product Management.
              </p>
              <div className="info-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Members</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Events</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <div className="icon-circle">
                <span className="icon">🚀</span>
              </div>
            </div>
            <div className="info-content">
              <h2 className="info-title">What We Do</h2>
              <p className="info-description">
                We regularly conduct case study contests, organize sessions with significant people in the field, including both alumni and non-alumni and guide people who are just starting out and want to explore Product Management further.
              </p>
              <div className="info-features">
                <div className="feature-item">
                  <span className="feature-dot"></span>
                  <span>Case Study Contests</span>
                </div>
                <div className="feature-item">
                  <span className="feature-dot"></span>
                  <span>Expert Sessions</span>
                </div>
                <div className="feature-item">
                  <span className="feature-dot"></span>
                  <span>Mentorship Programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Achievements Section */}
      <div className="achievements-section">
        <div className="section-header">
          <h2 className="section-title">Our Achievements</h2>
          <p className="section-subtitle">Excellence in competition and innovation</p>
          <div className="section-divider"></div>
        </div>
        
        <div className="achievements-grid">
          <div className="achievement-card featured">
            <div className="achievement-header">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-badge">Gold</div>
            </div>
            <h3 className="achievement-title">Inter IIT Tech Meet 2023 11.0</h3>
            <p className="achievement-description">
              Placed first among all the participating IITs in the High Prep NLP event.
            </p>
            <div className="achievement-year">2023</div>
          </div>

          <div className="achievement-card">
            <div className="achievement-header">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-badge">Winner</div>
            </div>
            <h3 className="achievement-title">Convolve 2023</h3>
            <p className="achievement-description">
              Won the first edition of Convolve pan-IIT hackathon at IIT Guwahati in collaboration with Cisco.
            </p>
            <div className="achievement-year">2023</div>
          </div>

          <div className="achievement-card">
            <div className="achievement-header">
              <div className="achievement-icon">🥉</div>
              <div className="achievement-badge">Bronze</div>
            </div>
            <h3 className="achievement-title">Cloud Physician Event</h3>
            <p className="achievement-description">
              Placed third in the Mid Prep Cloud Physician Event at Inter IIT Tech Meet 2023.
            </p>
            <div className="achievement-year">2023</div>
          </div>

          <div className="achievement-card">
            <div className="achievement-header">
              <div className="achievement-icon">🥉</div>
              <div className="achievement-badge">Bronze</div>
            </div>
            <h3 className="achievement-title">ISRO Satellite Event</h3>
            <p className="achievement-description">
              Placed third in the Mid Prep ISRO satellite image super-resolution event.
            </p>
            <div className="achievement-year">2023</div>
          </div>

          <div className="achievement-card">
            <div className="achievement-header">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-badge">3rd Place</div>
            </div>
            <h3 className="achievement-title">Bosch High Prep Event</h3>
            <p className="achievement-description">
              Placed third in the High Prep event conducted by Bosch at Inter IIT Tech Meet 2022.
            </p>
            <div className="achievement-year">2022</div>
          </div>

          <div className="achievement-card">
            <div className="achievement-header">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-badge">Gold</div>
            </div>
            <h3 className="achievement-title">Bridgei-2i Event</h3>
            <p className="achievement-description">
              Placed first in the Bridgei-2i Automated Headline and Sentiment Generator event.
            </p>
            <div className="achievement-year">2021</div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;