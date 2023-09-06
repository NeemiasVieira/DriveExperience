import react from "react";
import { FooterStyle } from "./FooterStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We are a leading car rental agency offering a wide range of
              vehicles for your travel needs.
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p>Email: drivexperience@outlook.com</p>
            <p>Phone: +55 (13) 99602-0483</p>
            <p>7590 5th Avenue New York, NY - United States</p>
          </div>
          <div className="footer-section footerServices">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#/cars">Car Rentals</a>
              </li>
              <li>
                <a href="#/myreserves">Reserves</a>
              </li>
              <li>
                <a href="#">Fleet Selection</a>
              </li>
              <li>
                <a href="#">Customer Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-media-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/neemiasvieira/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5513996020483&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="https://www.linkedin.com/in/neemiasvieira/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/NeemiasVieira" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyrights">
          &copy; 2023 DriverExperience Agency. All rights reserved.
        </p>
      </div>
    </FooterStyle>
  );
};
