import React from "react";
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Fade from 'react-reveal'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import { Link, animateScroll as scroll } from "react-scroll";



export const Main = () => {


    return (
        <div id='main' className={s.mainBlock}>
            <div className={`${s.mainBlock_Container}`}>
                <Fade left>
                    <div className={s.mainBlock_text}>
                        <h6 className={s.mainBlock_preDescription}>Hello world</h6>
                        <h1 className={s.mainBlock_name}>Alexander Sharych</h1>
                        <div className={s.typingText}>
                            <ReactTypingEffect
                                text={['FRONTEND DEVELOPER']}
                            />
                        </div>

                    </div>
                </Fade>
                <Fade right>
                    <Tilt className="Tilt" options={{ max: 25 }}  >
                        <div className={s.mainBlock_foto}>
                        </div>
                    </Tilt>

                </Fade>

            </div>
        </div>
    )
}