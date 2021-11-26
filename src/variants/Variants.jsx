import React from "react";
import s from './Variants.module.css'
import styleContainer from './../common/styles/Container.module.css'


export const Variants = () => {
    return (
        <div className={s.variants}>
            <div className={`${s.variantsContainer} ${styleContainer.container}`}>
                <h2 className={s.title}>Variants</h2>
                <button className={s.callMe}>Call Me</button>
            </div>
        </div>

    )
}