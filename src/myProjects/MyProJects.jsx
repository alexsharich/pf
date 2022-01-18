import React from "react";
import s from './MyProjects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { Project } from "../myProjects/project/Project"
import { Title } from "../title/Title"
import bcgForfirstProject from '../assets/images/flowers.jpg'
import bcgForSecondProject from '../assets/images/catAndDog.jpg'

export const MyProjects = () => {

    const first = {
        backgroundImage: `url(${bcgForfirstProject})`,
      };
      const second = {
        backgroundImage: `url(${bcgForSecondProject})`,
      };

    return (
        <div className={s.myProjectBlock}>
            <div className={`${s.myProjectBlock_Container} ${styleContainer.container}`}>
                <Title title={'My Projects'} />
                <div className={s.projectBlock_myProjects}>
                    <Project style={first} title={'JS'} description={"blablagdfgn;oefnh;oid"} />
                    <Project style={second} title={'JS'} description={"blablabla"} />
                </div>
            </div>
        </div>
    )
}