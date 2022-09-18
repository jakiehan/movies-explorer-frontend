import React from 'react';
import './Footer.css';
import { footerLink } from '../../utils/constants.js';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__sources">
          <p className="footer__copyright">&#169;2022</p>
          <nav className="footer__nav">
            <ul className="footer__links">
              {footerLink.map((link) =>(
                <li key={link.id}>
                  <a
                    className="footer__link transparency-link"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
