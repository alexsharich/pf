import React from "react";
import s from './MyProjects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { Project } from "../myProjects/project/Project"

export const MyProjects = () => {
    return (
        <div className={s.myProjectBlock}>
            <div className={`${s.myProjectBlock_Container} ${styleContainer.container}`}>
                <h2 className={s.projectBlock_title}>My Projects</h2>
                <div className={s.projectBlock_myProjects}>
                    <Project title={'JS'} description={"blablagdfgn;oefnh;oid"}/>
                    <Project title={'JS'} description={"blablabla"}/>
                </div>
            </div>
        </div>
    )
}