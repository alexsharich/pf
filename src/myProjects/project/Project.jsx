import React from "react";
import s from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.projectBlock_imgContainer}>
           
                <a className={s.projectBlock_projectButton}>Project</a>
            
                </div>
                <h2 className={s.projectBlock_title}>{props.title}</h2>
                <p className={s.projectBlockdescription}>
                    {props.description}
                </p>
           
        </div>
    )
}