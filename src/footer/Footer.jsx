import React from "react";
import s from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'
import { FooterItem } from './footerItem/FooterItem'
import { Title } from '../title/Title'
import Fade from 'react-reveal/Fade'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s.footerBlock_Container} ${styleContainer.container}`}>
                <Fade bottom>
                    <Title title={'Footer'} />
                    <div className={s.footerBlock_information}>
                        <FooterItem />
                        <FooterItem />
                        <FooterItem />
                        <FooterItem />
                        <FooterItem />
                    </div>
                </Fade>

                <span className={s.footerText}>2021</span>
            </div>
        </div>
    )
}