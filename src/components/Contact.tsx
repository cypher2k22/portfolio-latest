import React from 'react';

const Contact: React.FC = () => {
  const email = "bakeerathan.karthigan@example.com";
  
  return (
    <section id="contact" className="container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <p className="heading-sm">Get In Touch</p>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
          Let's Work <span className="text-gradient">Together</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <a href={`mailto:${email}`} className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Say Hello
          </a>
          
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
            <a href="https://github.com/cypher2k22" target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bakeerathan-karthigan-529a56256/" target="_blank" rel="noreferrer" className="glass" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
