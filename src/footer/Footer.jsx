import React from "react";
import s from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s.footerContainer} ${styleContainer.container}`}>
                <h2 className={s.title}>Name</h2>
                <div className={s.footerInformation}>

                </div>
                <span className={s.footerText}>2021</span>
            </div>

        </div>
    )
}