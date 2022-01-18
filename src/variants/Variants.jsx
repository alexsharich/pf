import React from "react";
import s from './Variants.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { Title } from '../title/Title'

export const Variants = () => {
    return (
        <div className={s.variantsBlock}>
            <div className={`${s.variantsBlock_Container} ${styleContainer.container}`}>
                <Title title={'Variants'} />
                <button className={s.variantsBlock_button}>Call Me</button>
            </div>
        </div>
    )
}