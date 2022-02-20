import React from 'react';
import s from './Nav.module.css';
import Fade from 'react-reveal'
import { Link, animateScroll as scroll } from "react-scroll";

export const Nav = () => {
  return (
    <Fade bottom>
    <div className={s.navigationBlock}>
        <Link
          activeClass={s.active}
          to="main"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >Main</Link>
        <Link
          activeClass={s.active}
          to="skills"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >Skills</Link>
        <Link
          activeClass={s.active}
          to="myProjects"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >Projects</Link>
        <Link
          activeClass={s.active}
          to="contacts"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
        >Contacts</Link>
    </div>
    </Fade>
  )
}

