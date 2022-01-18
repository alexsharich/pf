import React from "react";
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.mainBlock_text}>
                    <h6 className={s.mainBlock_preDescription}>Hello world</h6>
                    <h1 className={s.mainBlock_name}>Hello world</h1>
                    <p className={s.mainBlock_description}>helo world</p>
                </div>
                <div className={s.mainBlock_foto}>
                </div>
            </div>
        </div>
    )
}