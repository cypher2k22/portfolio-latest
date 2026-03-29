import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="container" style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Bakeerathan Karthigan. Built with React & TypeScript.
      </p>
    </footer>
  );
};

export default Footer;
