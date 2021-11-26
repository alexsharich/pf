import React from "react";
import s from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { Skill } from './../skill/Skill'


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsContainer} ${styleContainer.container}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'js'} description={'dofngodfngodfnhdf'} />
                    <Skill title={'react'} description={'nwfonw'} />
                    <Skill title={'redux'} description={'meientb'} />
                </div>
                
            </div>
        </div>
    )
}