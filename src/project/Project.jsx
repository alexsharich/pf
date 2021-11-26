import React from "react";
import s from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.icon}>
           
                <button className={s.buttonStyle}>Project</button>
            
                </div>
                <h2 className={s.title}>{props.title}</h2>
                <span className={s.description}>
                    {props.description}
                </span>
           
        </div>
    )
}