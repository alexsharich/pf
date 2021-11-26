import React from "react";
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <h6>Hello world</h6>
                    <h1>Hello world</h1>
                    <p>helo world</p>
                </div>
                <div className={s.foto}>

                </div>
            </div>
        </div>
    )
}