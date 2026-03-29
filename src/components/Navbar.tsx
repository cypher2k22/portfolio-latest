import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '800px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      zIndex: 1000,
    }}>
      <div className="logo" style={{ fontWeight: 800, fontSize: '1.25rem' }}>
        BK<span className="text-gradient">.</span>
      </div>
      <ul style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600 }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="mailto:bakeerathan.karthigan@example.com" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
