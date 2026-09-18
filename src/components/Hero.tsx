import React from 'react';
import profileImage from '../assets/image.JPG';

const Hero: React.FC = () => (
  <section id="home" className="hero section">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="availability"><span /> Open to software engineering opportunities</div>
        <p className="eyebrow">Computer Engineering Undergraduate · USJ</p>
        <h1>I build software that<span> solves real problems.</span></h1>
        <p className="hero-lead">
          I'm Bakeerathan Karthigan — a Computer Engineering undergraduate focused on
          full-stack development, mobile applications, backend systems, and practical engineering.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">Explore my work <span>→</span></a>
          <a className="btn btn-ghost" href="https://github.com/cypher2k22" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <div className="hero-meta">
          <div><strong>2028</strong><span>Expected graduation</span></div>
          <div><strong>USJ</strong><span>University of Sri Jayewardenepura</span></div>
          <div><strong>01</strong><span>Flagship project in progress</span></div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-grid" />
        <div className="profile-card">
          <div className="profile-ring"><img src={profileImage} alt="Bakeerathan Karthigan" /></div>
          <div className="profile-caption">
            <span>BAKEERATHAN KARTHIGAN</span>
            <strong>Software Engineering</strong>
          </div>
        </div>
        <div className="floating-card floating-card-top"><span>⌘</span> Building with intention</div>
        <div className="floating-card floating-card-bottom"><span>⚡</span> Learn · Build · Ship</div>
      </div>
    </div>
    <div className="scroll-hint">Scroll to explore <span>↓</span></div>
  </section>
);

export default Hero;
