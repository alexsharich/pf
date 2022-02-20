import React from "react";
import styleContainer from './../common/styles/Container.module.css'
import s from './Contacts.module.css'
import { Title } from '../title/Title'
import Fade from 'react-reveal/Fade'

export const Contacts = () => {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${s.contactsBlock_Container} ${styleContainer.container}`}>
                <Title title={'Contacts'} />
                <Fade left>
                    <form className={s.contacts_form} action="#">
                        <input className={s.inputArea} type="text" placeholder={'text'} />
                        <input className={s.inputArea} type="text" placeholder={'text'} />
                        <textarea className={s.inputArea} placeholder={'text'}></textarea>
                        <button type="submit" className={s.sendButton_contactsBlock}>Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}