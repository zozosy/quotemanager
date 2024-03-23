import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <nav>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
       
      </div>
      <p>&copy; Art Gallery. All rights reserved.</p>
      <p><a href="/privacy-policy">Privacy Policy</a></p>
    </footer>
  );
};

export default Footer;
