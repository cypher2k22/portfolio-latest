import React from 'react';

const experiences = [
  {
    organization: "Career Guidance Society (CGS)",
    role: "Committee Member (2026 Term)",
    period: "2026 Term",
    description: "Focus on career development initiatives, student guidance, and organizing programs to bridge the gap between academia and industry.",
    tags: ["Leadership", "Career Development"]
  },
  {
    organization: "Nexus Club – Faculty of Engineering, USJ",
    role: "Finance Crew Head – NEXGEN Project",
    period: "Nov 2025 – Present",
    description: "Leading financial planning, budget management, and team leadership for the NEXGEN Project, ensuring all financial operations are precise and transparent.",
    tags: ["Finance", "Team Leadership"]
  },
  {
    organization: "IET On Campus – USJ",
    role: "Finance Crew – PCB Mastery Series",
    period: "Dec 2025 – Present",
    description: "Managing event finances and coordination for the PCB Mastery Series, supporting technical skill development for engineering students.",
    tags: ["Finance", "Coordination"]
  },
  {
    organization: "IEEE Computer Society Student Branch – USJ",
    role: "Delegates Handling Committee Member",
    period: "Oct 2025 – Nov 2025",
    description: "Handled delegate management, communication, and event coordination, ensuring a seamless experience for all participants.",
    tags: ["Management", "Communication"]
  },
  {
    organization: "FIT21 Event",
    role: "Event Handling Crew Member",
    period: "Oct 2025 – Present",
    description: "Providing logistics support, coordination, and execution for FIT21, managing event flows and attendee engagement.",
    tags: ["Logistics", "Execution Support"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="container">
      <div className="glass-card">
        <p className="heading-sm">Experience & Leadership</p>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>
          Roles & <span className="text-gradient">Contributions</span>
        </h2>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {experiences.map((exp, index) => (
            <div key={index} className="glass" style={{ 
              padding: '2rem', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
              borderLeft: index % 2 === 0 ? '4px solid var(--accent-blue)' : '4px solid var(--accent-green)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{exp.role}</h3>
                <h4 style={{ color: 'var(--accent-blue)', marginBottom: '1rem', fontWeight: 500, opacity: 0.9 }}>{exp.organization}</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6, fontSize: '0.95rem' }}>{exp.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.7rem', 
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.75rem', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      color: 'var(--text-secondary)',
                      borderRadius: '4px',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: 'right', minWidth: '150px' }}>
                <span style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  opacity: 0.8,
                  padding: '4px 12px',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '100px'
                }}>
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
