// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <strong>Email:</strong> <a href="mailto:info@example.com">zoubaida.taher17@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+1234567890">+1 (431) 276-2883</a>
          </p>
        </div>
        <div className="footer-info">
          <h4>Additional Info</h4>
          <p>
          Welcome to Zoubaida’s Quotes for Managers! Thank you for visiting. Follow us on social media for updates and inspiration.

          </p>
        </div>
      </div>
      <p>&copy; Art Galary. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
