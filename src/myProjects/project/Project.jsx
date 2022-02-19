import React from "react";
import s from './Project.module.css'


export const Project = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.projectBlock_imgContainer} style={props.style}>
                <a className={s.projectBlock_projectButton}>View</a>
            </div >
            <div className={s.projectInfo}>
                <h3 className={s.projectBlock_title}>{props.title}</h3>
                <p className={s.projectBlock_description}>
                    {props.description}
                </p>
            </div>
        </div>
    )
}