import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const whatsappNumber = '5521996296559';
  const emailAddress = 'pedruamerico@gmail.com';

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20Pedro!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.`;
  const emailLink = `mailto:${emailAddress}?subject=Contato%20Portfólio%20-%20Portfólio`;

  return (
    <section id="contatos" className="contatos">
      <h2 className="contatos-titulo">Entre em contato</h2>
      <div className="contatos-links">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="botao-contato">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href={emailLink} className="botao-contato">
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
    </section>
  );
};

export default ContactSection;