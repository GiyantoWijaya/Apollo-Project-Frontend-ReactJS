import React from 'react';
import {
  FaGoogle,
  FaFacebook,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <hr
          style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: 0.5,
            borderColor: '#000000',
          }}
        />
        <p className="text-center">&copy; Apollo Developer Team 2023</p>
        <p className="text-center">
          Apollo Website is a place where you will find great & simple games to
          kill your time. Here each game is beautifully created with simplicity
        </p>
        <div className="d-flex justify-content-evenly mt-3">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle size={24} className="mr-2" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} className="mr-2" />
          </a>
          <a href="mailto:contact@example.com">
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="mr-2" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="mr-2" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
