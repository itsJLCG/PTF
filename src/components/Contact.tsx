import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>Have a project idea? I'd love to help — let's build it together!</p>

          <div className="contact-list">
            <a href="https://www.linkedin.com/in/jhon-ludwig-gayapa-a40769332/" className="contact-item" target="_blank" rel="noreferrer">
              <LinkedInIcon />
              <span className="contact-text">LinkedIn — Jhon Ludwig C. Gayapa</span>
            </a>

            <a href="https://github.com/itsJLCG" className="contact-item" target="_blank" rel="noreferrer">
              <GitHubIcon />
              <span className="contact-text">GitHub — itsJLCG</span>
            </a>

            <a href="mailto:ludwigjhon.gayapa@gmail.com" className="contact-item" target="_blank" rel="noreferrer">
              <EmailIcon />
              <span className="contact-text">Email — ludwigjhon.gayapa@gmail.com</span>
            </a>

            <button type="button" className="contact-item">
              <PhoneIcon />
              <span className="contact-text">Viber — Available on request</span>
            </button>

            <a href="https://www.facebook.com/jhonludwig.gayapa" className="contact-item" target="_blank" rel="noreferrer">
              <FacebookIcon />
              <span className="contact-text">Facebook — Jhon Ludwig C. Gayapa</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;