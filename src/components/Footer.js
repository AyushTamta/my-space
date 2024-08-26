import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <p>Made with love by Ayush Tamta</p>
            <div className="footer-contact">
                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                    <a href="mailto:Ayush.tamta111@gmail.com" className="contact-link">ayush.tamta111@gmail.com</a>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                    <a href="tel:+917780461832" className="contact-link">+91 (778) 046-1832</a>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                    <a href="https://www.linkedin.com/in/ayushtamta/" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                    <a href="https://github.com/AyushTamta" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
