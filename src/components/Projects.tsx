import React from 'react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "🚌 BUS_TRACKER_PRO",
    description: "A comprehensive real-time bus tracking system with dedicated modules for Admins, Drivers, and Passengers. Features live location updates, route management, and passenger alerts.",
    tech: ["React Native", "Expo", "Firebase", "Node.js", "Express", "Google Maps API"],
    link: "https://github.com/cypher2k22/BUS_TRACKER_PRO",
    image: "https://github.com/user-attachments/assets/7d92bfe3-762c-4e2e-a19b-c7e4b33ce465"
  },
  {
    title: "Real-Time Bus Tracking Engine",
    description: "High-performance tracking engine implemented with Haversine formula for distance calculations and 500ms polling for smooth marker movements.",
    tech: ["TypeScript", "Firebase Realtime DB", "React Native Maps"],
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container">
      <div className="glass-card">
        <p className="heading-sm">Portfolio Showcase</p>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>
          Recent <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid grid-2">
          {projects.map((project) => (
            <div key={project.title} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {project.image && (
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '200px' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  <div className="glass" style={{ position: 'absolute', bottom: '10px', right: '10px', padding: '5px 12px', fontSize: '0.75rem', fontWeight: 600 }}>Mobile App</div>
                </div>
              )}
              
              <div>
                <h3 style={{ marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.description}</p>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map(t => (
                  <span key={t} style={{ 
                    fontSize: '0.7rem', 
                    padding: '4px 10px', 
                    background: 'rgba(56, 189, 248, 0.1)', 
                    color: 'var(--accent-blue)', 
                    borderRadius: '20px',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}>{t}</span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ width: 'fit-content', marginTop: 'auto' }}>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
