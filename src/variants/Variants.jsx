import React from "react";
import s from './Variants.module.css'
import styleContainer from './../common/styles/Container.module.css'


export const Variants = () => {
    return (
        <div className={s.variantsBlock}>
            <div className={`${s.variantsBlock_Container} ${styleContainer.container}`}>
                <h2 className={s.variantsBlock_title}>Variants</h2>
                <button className={s.variantsBlock_button}>Call Me</button>
            </div>
        </div>

    )
}