import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__sources">
          <p className="footer__copyright">&#169;2022</p>
          <nav className="footer__nav">
            <ul className="footer__links">
              <li>
                <a
                  className="footer__link transparency-link"
                  href="https://practicum.yandex.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a
                  className="footer__link transparency-link"
                  href="https://github.com/jakiehan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="footer__link transparency-link"
                  href="https://t.me/jakiehan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
