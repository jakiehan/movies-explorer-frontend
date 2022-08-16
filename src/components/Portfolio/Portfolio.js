import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li>
          <a
            className="portfolio__link transparency-link"
            href="https://github.com/jakiehan/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-title">Статичный сайт</p>
            <span className="portfolio__arrow">↗</span>
          </a>
          <hr className="portfolio__line" />
        </li>
        <li>
          <a
            className="portfolio__link transparency-link"
            href="https://github.com/jakiehan/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-title">Адаптивный сайт</p>
            <span className="portfolio__arrow">↗</span>
          </a>
          <hr className="portfolio__line" />
        </li>
        <li>
          <a
            className="portfolio__link transparency-link"
            href="https://github.com/jakiehan/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-title">Одностраничное приложение</p>
            <span className="portfolio__arrow">↗</span>
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Portfolio;
