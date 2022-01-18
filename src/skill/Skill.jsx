import React from "react";
import s from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.skillBlock_icon}></div>
            <h3 className={s.skillBlock_title}>{props.title}</h3>
            <p className={s.skillBlock_description}>
                {props.description}
            </p>
        </div>
    )
}