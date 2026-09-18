import React from 'react';

const groups = [
  { number: '01', title: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
  { number: '02', title: 'Frontend & Mobile', items: ['React', 'React Native', 'Expo', 'HTML5', 'CSS3'] },
  { number: '03', title: 'Backend & Data', items: ['Node.js', 'Express', 'REST APIs', 'Firebase', 'Firestore', 'MySQL'] },
  { number: '04', title: 'Systems & Tools', items: ['Git', 'GitHub', 'Linux', 'Networking', 'Raspberry Pi', 'Arduino', 'OpenCV', 'Docker'] },
];

const Skills: React.FC = () => (
  <section id="skills" className="section section-dark">
    <div className="section-heading">
      <div>
        <p className="eyebrow">03 · Skills</p>
        <h2>Tools I use to<br /><span>build things.</span></h2>
      </div>
      <p className="section-intro">
        A growing engineering toolkit. I care more about understanding the fundamentals behind a technology
        than simply collecting names on a stack.
      </p>
    </div>

    <div className="skills-grid">
      {groups.map(group => (
        <article className="skill-group" key={group.title}>
          <div className="skill-number">{group.number}</div>
          <h3>{group.title}</h3>
          <div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
