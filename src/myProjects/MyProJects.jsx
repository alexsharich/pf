import React from "react";
import s from './MyProjects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { Project } from "../project/Project";

export const MyProjects = () => {
    return (
        <div className={s.myProjectsBlock}>
            <div className={`${s.myProjectsContainer} ${styleContainer.container}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.myProjects}>
                    <Project title={'JS'} description={"blablabla"}/>
                    <Project title={'JS'} description={"blablabla"}/>
                </div>
            </div>
        </div>
    )
}