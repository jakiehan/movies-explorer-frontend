import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/photo.jpg';
import SectionContent from '../SectionContent/SectionContent.js';
import Portfolio from '../Portfolio/Portfolio.js';

const AboutMe = () => {
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
            <h3 className="about-me__name">Михаил</h3>
            <p className="about-me__rank">Фронтенд-разработчик, 28 лет</p>
            <p className="about-me__description">Я родился в Зилово сити. Сейчас живу в Ульяновске, закончил факультет информационных систем и технологий УлГТУ.
              Я люблю слушать музыку, а ещё увлекаюсь велопрогулками. Это мой дипломный проект на курсе Веб-разработчик от ЯП. Работал инженером-конструктором на АО "Авиастар-СП".
              После прохождения курса, планирую найти работу в IT и дальше развиваться в этом направлении.
            </p>
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
