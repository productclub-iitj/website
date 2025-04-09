import '../styles/Home.css';
import teamImage from '../images/team.jpeg';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section with Background Image and Overlay */}
      <div className="hero-section">
        <div className="hero-content">
          <h2>Welcome to</h2>
          <h1>The Product Club</h1>
        </div>
      </div>

      {/* Placeholder Photo Box */}
      <div className="photos-section">
        <div className="photos-container">
          <div className="photo-item">
            <img src={teamImage} alt="Product team collaborating" />
          </div>
          <div className="photo-item">
            <img src={teamImage} alt="Product design session" />
          </div>
          <div className="photo-item">
            <img src={teamImage} alt="Team meeting" />
          </div>
          <div className="photo-item">
            <img src={teamImage} alt="Product presentation" />
          </div>
        </div>
      </div>

      {/* Who We Are & What We Do Section */}
      <div className="info-section">
        <div className="info-column">
          <h2>Who We Are</h2>
          <p>The Product Club, IIT Jodhpur aims to build a community that can work with the synergy of tech, UX and design. It was founded with the vision to provide proper guidance to those aspiring to build a career in off-tech domains, particularly Product Management.</p>
        </div>
        <div className="info-column">
          <h2>What We Do</h2>
          <p>We regularly conduct case study contests, organize sessions with significant people in the field, including both alumni and non-alumni and guide people who are just starting out and want to explore Product Management further.</p>
        </div>
      </div>
      
      {/* Achievements Section */}
      {/* <div className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-card"></div>
          <div className="achievement-card"></div>
          <div className="achievement-card"></div>
          <div className="achievement-card"></div>
        </div>
      </div> */}
      
      {/* Your original achievement cards can go here as needed */}
      <div className="original-achievements">
        <h2 id="achievements-heading">ACHIEVEMENTS</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>Convolve 2023</h3>
            <p>Won the first edition of Convolve pan-IIT hackathon at IIT Guwahati in collaboration with Cisco.</p>
          </div>
          <div className="achievement-card">
            <h3>Inter IIT Tech Meet 2023 11.0 (Gold Medal)</h3>
            <p>Placed first among all the participating IITs in the High Prep NLP event.</p>
          </div>
          <div className="achievement-card">
            <h3>Inter IIT Tech Meet 2023 11.0 (Bronze Medal)</h3>
            <p>Placed third in the Mid Prep Cloud Physician Event.</p>
          </div>
          <div className="achievement-card">
            <h3>Inter IIT Tech Meet 2023 11.0 (Bronze Medal)</h3>
            <p>Placed third in the Mid Prep ISRO satellite image super-resolution event.</p>
          </div>
          <div className="achievement-card">
            <h3>Inter IIT Tech Meet 2022 10.0 (High Prep)</h3>
            <p>Placed third in the High Prep event conducted by Bosch.</p>
          </div>
          <div className="achievement-card">
            <h3>Inter IIT Tech Meet 2021 9.0 (Gold Medal)</h3>
            <p>Placed first in the Bridgei-2i Automated Headline and Sentiment Generator event.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
