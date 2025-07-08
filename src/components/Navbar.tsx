import React from 'react';

function Navbar() {
  return (
    <nav className="navegacao">
      <ul className="menu">
        <li>
          <a href="#inicio" className="menu-link">Início</a>
        </li>
        <li>
          <a href="#sobre" className="menu-link">Sobre</a>
        </li>
        <li>
          <a href="#projetos" className="menu-link">Projetos</a>
        </li>
        <li>
          <a href="#contatos" className="menu-link">Contatos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;