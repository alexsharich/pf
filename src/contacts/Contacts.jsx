import React from "react";
import styleContainer from './../common/styles/Container.module.css'
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${s.contactsContainer} ${styleContainer.container}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form} action="#">
                    <input type="text" placeholder={'text'} />
                    <input type="text" placeholder={'text'} />
                    <textarea placeholder={'text'}></textarea>
                </form>
                <button className={s.sendButton}>Send</button>
            </div>
        </div>
    )
}