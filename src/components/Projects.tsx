import React from 'react';

type Project = {
  title: string;
  label: string;
  description: string;
  tech: string[];
  link: string;
  featured?: boolean;
  image?: string;
};

const projects: Project[] = [
  {
    title: 'BusTrack',
    label: 'REAL-TIME · MOBILE',
    description: 'A full-stack public transport platform connecting passengers, drivers, and administrators through live tracking, maps, and role-based workflows.',
    tech: ['React Native', 'TypeScript', 'Node.js', 'Firebase', 'Google Maps'],
    link: 'https://github.com/cypher2k22/BUS_TRACKER_PRO',
    image: 'https://github.com/user-attachments/assets/7d92bfe3-762c-4e2e-a19b-c7e4b33ce465',
    featured: true,
  },
  {
    title: 'Task Management System',
    label: 'FULL-STACK · API',
    description: 'A full-stack application organized around frontend/backend separation and API-driven workflows.',
    tech: ['Python', 'REST APIs', 'Frontend', 'Backend'],
    link: 'https://github.com/cypher2k22/taskmanagement',
  },
  {
    title: 'Website Development',
    label: 'WEB · DEPLOYMENT',
    description: 'A web project focused on frontend/backend integration and deploying a complete application workflow.',
    tech: ['Web Development', 'Backend', 'Deployment'],
    link: 'https://github.com/cypher2k22/websitedevolepment',
  },
  {
    title: 'Student Performance Analysis',
    label: 'PYTHON · DATA',
    description: 'A Python and Pandas analysis project exploring relationships within student examination data.',
    tech: ['Python', 'Pandas', 'Data Analysis'],
    link: 'https://github.com/cypher2k22/Students-Performance-analyse-in-Exams',
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="section">
    <div className="section-heading">
      <div>
        <p className="eyebrow">04 · Selected work</p>
        <h2>Projects that show<br /><span>how I think.</span></h2>
      </div>
      <p className="section-intro">
        A focused selection rather than a list of every experiment. More substantial work will be added as I ship it.
      </p>
    </div>

    <div className="projects-grid">
      {projects.map(project => (
        <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.title}>
          {project.image && (
            <div className="project-image">
              <img src={project.image} alt={`${project.title} preview`} />
            </div>
          )}
          <div className="project-body">
            <div className="project-label">{project.label}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
              View repository <span>↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
