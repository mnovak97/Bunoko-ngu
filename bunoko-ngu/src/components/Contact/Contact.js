import './Contact.scss'
import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

function Contact() {
    const { t } = useTranslation()
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name,email,subject,message} = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        console.log(conFom)
    }

    return (
 
        <div className='container'>
            <form onSubmit={onSubmit}>
                <h2>{t('write')}</h2>
                <input className='formInput' placeholder={t('name')} type='text' id='name' required/>
                <input className='formInput' placeholder={t('email')} type='email' id='email' required />
                <input className='formInput' placeholder={t('subject')} type='text' id='subject' required/>
                <textarea className='formInput' placeholder={t('message')} id='message' required />
                <button className='buttonSubmit' type='submit'>
                    {formStatus}
                </button>
            </form>
        </div>
        
    );
};

export default Contact;