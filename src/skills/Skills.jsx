import React from "react";
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { Skill } from './../skill/Skill'
import { Title } from '../title/Title'
import Fade from 'react-reveal/Fade'

export const Skills = () => {
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${s.skillsBlock_Container} ${styleContainer.container}`}>
                <Fade bottom>
                <Title title={'Skills'} />
                <div className={s.skills}>
                    <Skill title={'React'} description={'A JavaScript library for building user interfaces'} />
                    <Skill title={'Redux'} description={'Redux is a predictable state container for JavaScript apps'} />
                    <Skill title={'TypeScript'} description={' is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.'} />
                    <Skill title={'Sass'} description={'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'} />
                    <Skill title={'TDD'} description={' is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.'} />
                    <Skill title={'NodeJS'} description={'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.'} />
                    <Skill title={'Rest API'} description={' is a software architectural style that was created to guide the design and development of the architecture for the World Wide Web.'} />
                </div>
                </Fade>
                
            </div>
        </div>
    )
}