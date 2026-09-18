import React, { useState } from 'react';

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Bakeerathan Karthigan home">
          BK<span>.</span>
        </a>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <div className={open ? 'nav-links is-open' : 'nav-links'}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
