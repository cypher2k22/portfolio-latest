import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="section">
    <div className="contact-card">
      <p className="eyebrow">05 · Contact</p>
      <h2>Have a problem worth<br /><span>building a solution for?</span></h2>
      <p>
        I'm currently focused on growing as a software engineer and would be happy to connect about
        internships, engineering projects, collaboration, or opportunities to learn.
      </p>
      <div className="contact-links">
        <a className="btn btn-primary" href="https://github.com/cypher2k22" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a className="btn btn-ghost" href="https://www.linkedin.com/in/bakeerathan-karthigan-529a56256/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
    </div>
  </section>
);

export default Contact;
