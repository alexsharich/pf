import React from "react";
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { Skill } from './../skill/Skill'
import { Title } from '../title/Title'

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsBlock_Container} ${styleContainer.container}`}>
                <Title title={'Skills'} />
                <div className={s.skills}>
                    <Skill title={'js'} description={'dfgdfdfg dfgdfgdfgdfsdfs dfsdfsdf sdf sdfs dfsdfsd fsdfdfgdfgd fgdfg dfgdfg'} />
                    <Skill title={'react'} description={'nwfonw'} />
                    <Skill title={'redux'} description={'meientb'} />
                </div>
            </div>
        </div>
    )
}