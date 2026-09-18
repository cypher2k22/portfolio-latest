import React from 'react';

const About: React.FC = () => (
  <section id="about" className="section">
    <div className="section-heading">
      <div>
        <p className="eyebrow">01 · About</p>
        <h2>Engineering mindset,<br /><span>practical execution.</span></h2>
      </div>
      <p className="section-intro">
        I enjoy taking an idea from a rough concept to a working system — then improving the architecture,
        reliability, and user experience as I learn more.
      </p>
    </div>

    <div className="about-grid">
      <article className="about-story card">
        <p>
          I'm studying Computer Engineering at the University of Sri Jayewardenepura and building my
          foundation across data structures, backend engineering, databases, networking, and software development.
        </p>
        <p>
          My projects are where I turn those fundamentals into practice. I especially enjoy systems that
          connect software to real-world workflows, such as real-time tracking, APIs, mobile applications,
          and deployment.
        </p>
        <div className="quote-line">“Build it. Understand it. Improve it.”</div>
      </article>

      <div className="about-facts">
        <div className="fact card"><span>EDUCATION</span><strong>BSc (Hons) Computer Engineering</strong><small>University of Sri Jayewardenepura · Expected 2028</small></div>
        <div className="fact card"><span>FOCUS</span><strong>Software Engineering</strong><small>Full-stack · Backend · Mobile · Systems</small></div>
        <div className="fact card"><span>BASED IN</span><strong>Sri Lanka</strong><small>Open to software engineering opportunities</small></div>
      </div>
    </div>
  </section>
);

export default About;
