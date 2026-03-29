import React from 'react';

type SkillCategory = {
  title: string;
  items: string[];
};

const skills: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["React Native (Expo)", "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3 / Sass"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "Firebase Cloud Functions"],
  },
  {
    title: "Database & Tools",
    items: ["Firebase Firestore", "NoSQL", "Git & GitHub", "Postman", "VS Code"],
  },
  {
    title: "Leadership & Management",
    items: ["Financial Planning", "Budget Management", "Team Leadership", "Delegate Management", "Communication", "Event Coordination"],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container">
      <div className="glass-card">
        <p className="heading-sm">Skills & Technologies</p>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem' }}>
          My <span className="text-gradient">Technical Arsenal</span>
        </h2>
        
        <div className="grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {skills.map((category) => (
            <div key={category.title} className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.25rem', color: 'var(--accent-blue)' }}>{category.title}</h3>
              <ul style={{ display: 'grid', gap: '0.75rem' }}>
                {category.items.map((item) => (
                  <li key={item} style={{ 
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-green)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
