import React from 'react';
import './Portfolio.css';
import { portfolio } from '../../utils/constants.js';

const Portfolio = () => {
  return (
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        {portfolio.map((element) => (
          <li className="portfolio__links-element" key={element.id}>
            <a
              className="portfolio__link transparency-link"
              href={element.href}
              target="_blank"
              rel="noreferrer"
            >
              <p className="portfolio__link-title">{element.title}</p>
              <span className="portfolio__arrow">{element.arrow}</span>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Portfolio;
