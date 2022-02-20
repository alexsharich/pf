import React from "react";
import s from './Variants.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { Title } from '../title/Title'
import Fade from 'react-reveal'

export const Variants = () => {
    return (
        <div className={s.variantsBlock}>
            <div className={`${s.variantsBlock_Container} ${styleContainer.container}`}>
                <Fade>
                    <Title title={'Variants'} />
                    <button className={s.variantsBlock_button}>Call Me</button>
                </Fade>
            </div>
        </div>
    )
}