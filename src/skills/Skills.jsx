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
                    <Skill title={'js'} description={'dfgdfdfg dfgdfgdfgdfsdfs dfsdfsdf sdf sdfs dfsdfsd fsdfdfgdfgd fgdfg dfgdfg'} />
                    <Skill title={'react'} description={'nwfonw'} />
                    <Skill title={'redux'} description={'meientb'} />
                </div>
                </Fade>
                
            </div>
        </div>
    )
}