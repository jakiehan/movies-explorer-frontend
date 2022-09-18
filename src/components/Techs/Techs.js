import React from 'react';
import './Techs.css';
import SectionContent from '../SectionContent/SectionContent.js';
import { techs } from '../../utils/constants.js';

const Techs = () => {
  return (
    <section
      className="techs"
      id="techs-section"
    >
      <SectionContent title="Технологии" lineColorClass="section__line_type_tech">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          {techs.map((tech) => (
            <li className="techs__list-item" key={tech.id}>{tech.tech}</li>
          ))}
        </ul>
      </SectionContent>
    </section>
  )
}

export default Techs;
