import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav-tab">
      <Link
        to="about-project-section"
        className="nav-tab__link transparency-link"
        smooth
        duration={500}
      >
        О проекте
      </Link>
      <Link
        to="techs-section"
        className="nav-tab__link transparency-link"
        smooth
        duration={700}
      >
        Технологии
      </Link>
      <Link
        to="about-me-section"
        className="nav-tab__link transparency-link"
        smooth
        duration={700}
      >
        Студент
      </Link>
    </nav>
  )
}

export default NavTab;