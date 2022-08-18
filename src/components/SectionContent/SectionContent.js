import React from 'react';
import './SectionContent.css'

const SectionContent = ({ title, children, lineColorClass, widthContentClass }) => {
  return (
    <div className={`section__content ${widthContentClass}`}>
      <h2 className="section__title">{title}</h2>
      <hr className={`section__line ${lineColorClass}`} />
      {children}
    </div>
  )
}

export default SectionContent;
