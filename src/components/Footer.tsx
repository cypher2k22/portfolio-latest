import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <span>© {new Date().getFullYear()} Bakeerathan Karthigan</span>
    <span>Built with React + TypeScript · <a href="#home">Back to top ↑</a></span>
  </footer>
);

export default Footer;
