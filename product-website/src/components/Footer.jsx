import "../styles/Footer.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:example@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
      <p>© 2025 The Product Club IIT Jodhpur | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
