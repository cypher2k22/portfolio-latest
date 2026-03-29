import React from 'react';
import profileImage from '../assets/image.JPG';

const Hero: React.FC = () => {
  return (
    <section id="home" className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      paddingTop: '120px',
    }}>
      <div className="profile-image-container" style={{
        position: 'relative',
        width: '180px',
        height: '180px',
        marginBottom: '2rem',
        animation: 'float 4s ease-in-out infinite',
      }}>
        <div className="image-glow" style={{
          position: 'absolute',
          inset: '-5px',
          background: 'linear-gradient(135deg, #38bdf8 0%, #34d399 100%)',
          borderRadius: '50%',
          filter: 'blur(10px)',
          opacity: 0.6,
        }}></div>
        <img 
          src={profileImage} 
          alt="Bakeerathan Karthigan" 
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '3px solid var(--bg-color)',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
          }} 
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      <div className="glass-card" style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '3rem 2rem',
        animation: 'fadeInUp 0.8s ease-out forwards',
      }}>
        <p className="heading-sm">Software Engineer & Mobile Developer</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1, margin: '1rem 0' }}>
          Crafting <span className="text-gradient">Digital Experiences</span> With Precision
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
        }}>
          Hi, I'm Bakeerathan. I build high-performance mobile apps and scalable full-stack solutions that solve real-world problems.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
