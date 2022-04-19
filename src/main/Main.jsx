import React from "react";
import s from './Main.module.css'
import Fade from 'react-reveal'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import Particles from "react-tsparticles"

export const Main = () => {

    return (
        <div id='main' className={s.mainBlock}>
            <Particles className={s.particles} params={{
                "particles": {
                    "number": {
                        "value": 300,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.01
                    },
                    "move": {
                        "direction": "right",
                        "speed": 0.05
                    },
                    "size": {
                        "value": 2
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 3,
                            "opacity_min": 0.05
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }} />
            <div className={`${s.mainBlock_Container}`}>
                <Fade left>
                    <div className={s.mainBlock_text}>
                        <h6 className={s.mainBlock_preDescription}>Hello world</h6>
                        <h1 className={s.mainBlock_name}>FRONTEND DEVELOPER</h1>
                        <div className={s.typingText}>
                            <ReactTypingEffect
                                text={['Alexander Sharych']}
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