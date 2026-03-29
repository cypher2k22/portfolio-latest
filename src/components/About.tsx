import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="container">
      <div className="glass-card">
        <p className="heading-sm">About Me</p>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          Computer Engineering <span className="text-gradient">Undergraduate</span>
        </h2>
        
        <div className="grid grid-2" style={{ gap: '3rem' }}>
          <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '1.2rem' }}>
              I am a passionate Computer Engineering student at the University of Sri Jayewardenepura, specializing in full-stack and mobile app development.
            </p>
            <p>
              My journey in software engineering is driven by a desire to build tools that make a difference. I thrive on solving complex problems and turning ideas into functional, beautiful applications.
            </p>
          </div>
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div className="glass" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-blue)' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Education</h4>
              <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>University of Sri Jayewardenepura</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>BSc (Hons) Computer Engineering</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Expected Graduation: 2028</p>
            </div>
            <div className="glass" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-green)' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Location</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Sri Lanka (Available for remote work)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
