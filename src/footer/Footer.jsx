import React from "react";
import s from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { FooterItem } from './footerItem/FooterItem'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s.footerBlock_Container} ${styleContainer.container}`}>
                <h2 className={s.footerBlock_title}>Name</h2>
                <div className={s.footerBlock_information}>
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                    <FooterItem />
                </div>
                <span className={s.footerText}>2021</span>
            </div>
        </div>
    )
}