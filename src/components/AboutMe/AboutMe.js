import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/photo.jpg';
import SectionContent from '../SectionContent/SectionContent.js';
import Portfolio from '../Portfolio/Portfolio.js';
import { aboutMe } from '../../utils/constants.js';

const AboutMe = () => {

  const { name, rank, description } = aboutMe;

  return (
    <section
      className="about-me"
      id="about-me-section"
    >
      <SectionContent
        title="Студент"
        widthContentClass="section__content_type_about-me"
      >
        <div className="about-me__info">
          <div className="about-me__biography">
            <h3 className="about-me__name">{name}</h3>
            <p className="about-me__rank">{rank}</p>
            <p className="about-me__description">{description}</p>
            <ul className="about-me__links">
              <li>
                <a
                  className="about-me__link transparency-link"
                  href="https://t.me/jakiehan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  className="about-me__link transparency-link"
                  href="https://github.com/jakiehan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img
            className="about-me__photo"
            src={myPhoto}
            alt="Мое фото"
          />
        </div>
        <Portfolio />
      </SectionContent>
    </section>
  )
}

export default AboutMe;
