import React from 'react';
import './AboutProject.css'
import SectionContent from '../SectionContent/SectionContent.js'
import TimeLine from '../TimeLine/TimeLine.js';
import { aboutProject } from '../../utils/constants.js';

const AboutProject = () => {
  return (
    <section
      className="about-project"
      id="about-project-section"
    >
      <SectionContent title="О проекте">
        <div className="about-project__intro">
          {aboutProject.map((section) => (
            <div key={section.id}>
              <h3 className="about-project__intro-subtitle">{section.subtitle}</h3>
              <p className="about-project__intro-description">{section.description}</p>
            </div>
          ))}
        </div>
       <TimeLine />
      </SectionContent>
    </section>
  )
}

export default AboutProject;