import React from 'react';
import './AboutProject.css'
import SectionContent from '../SectionContent/SectionContent.js'
import TimeLine from '../TimeLine/TimeLine.js';

const AboutProject = () => {
  return (
    <section className="about-project"
             id="about-project-section"
    >
      <SectionContent title="О проекте">
        <div className="about-project__intro">
          <div>
            <h3 className="about-project__intro-subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__intro-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <h3 className="about-project__intro-subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__intro-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
       <TimeLine />
      </SectionContent>
    </section>
  )
}

export default AboutProject;