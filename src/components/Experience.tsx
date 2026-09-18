import React from 'react';

const experiences = [
  {
    organization: 'Career Guidance Society (CGS)',
    role: 'Committee Member',
    period: '2026',
    description: 'Contributing to career development initiatives, student guidance, and programmes connecting students with industry.',
    tags: ['Leadership', 'Career Development'],
  },
  {
    organization: 'Nexus Club · Faculty of Engineering, USJ',
    role: 'Finance Crew Head · NEXGEN Project',
    period: 'Nov 2025 – Present',
    description: 'Leading financial planning, budget management, and coordination for the NEXGEN Project.',
    tags: ['Finance', 'Leadership'],
  },
  {
    organization: 'IET On Campus · USJ',
    role: 'Finance Crew · PCB Mastery Series',
    period: 'Dec 2025 – Present',
    description: 'Supporting financial management and coordination for a technical learning programme for engineering students.',
    tags: ['Finance', 'Coordination'],
  },
  {
    organization: 'IEEE Computer Society Student Branch · USJ',
    role: 'Delegates Handling Committee Member',
    period: 'Oct – Nov 2025',
    description: 'Supported delegate management, communication, and event coordination.',
    tags: ['Management', 'Communication'],
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="section">
    <div className="section-heading">
      <div>
        <p className="eyebrow">02 · Experience</p>
        <h2>Leadership beyond<br /><span>the code.</span></h2>
      </div>
      <p className="section-intro">
        Technical growth is only one part of engineering. These roles have strengthened my communication,
        ownership, planning, and ability to work with teams.
      </p>
    </div>

    <div className="timeline">
      {experiences.map((item, index) => (
        <article className="timeline-item" key={item.organization}>
          <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
          <div className="timeline-content">
            <div className="timeline-top">
              <div>
                <p className="timeline-org">{item.organization}</p>
                <h3>{item.role}</h3>
              </div>
              <span className="period">{item.period}</span>
            </div>
            <p>{item.description}</p>
            <div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
