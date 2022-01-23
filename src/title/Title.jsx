import React from 'react'
import s from './Title.module.css'

export const Title = ({ title }) => {
    return (
        <div>
            <h2 className={s.title}>{title}</h2>
        </div>
    )
}