import React from 'react';
import ThemeToggle from './ThemeToggle';

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#')) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function Navbar() {
  return (
    <nav className="navegacao">
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <ul className="menu" style={{ flex: 1 }}>
          <li>
            <a href="#inicio" className="menu-link" onClick={handleNavClick}>Início</a>
          </li>
          <li>
            <a href="#sobre" className="menu-link" onClick={handleNavClick}>Sobre</a>
          </li>
          <li>
            <a href="#servicos" className="menu-link" onClick={handleNavClick}>Serviços</a>
          </li>
          <li>
            <a href="#projetos" className="menu-link" onClick={handleNavClick}>Projetos</a>
          </li>
          <li>
            <a href="#contatos" className="menu-link" onClick={handleNavClick}>Contatos</a>
          </li>
        </ul>
        <div className="theme-toggle-btn">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;