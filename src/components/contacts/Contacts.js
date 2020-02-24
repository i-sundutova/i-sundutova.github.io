import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLength30, maxLength200, email } from '../../utils/validators';
import { Textarea, InputText, InputEmail } from '../common/formControls';


const Contacts = (props) => {
    const [requestDone, setRequestDone] = useState(false);

    const onSubmit = async (formData) => {
        await props.sendContactEmail(formData);
        setRequestDone(true);
    }

    return (
        <div className="page" id="pageContacts">
            <div className="contactContainer">
                <div className="contact-items">
                    <span className="contact-item"><span className="font-thin">telegram: </span><a className="a" href="https://t.me/iryna_martyniuk">@iryna_martyniuk</a></span>
                    <span className="contact-item"><span className="font-thin">mail: </span><a className="a" href="mailto:isundutova@gmail.com">isundutova@gmail.com</a></span>
                </div>

                <h1>{props.dictionary.pageName}</h1>

                <ContactFormRXF onSubmit={onSubmit} dictionary={props.dictionary} sendMailInProgress={props.sendMailInProgress}
                    requestDone={requestDone} sendMailIsSuccessful={props.sendMailIsSuccessful} />
            </div>
        </div>
    )
}

const ContactForm = (props) => {
    const dictionary = props.dictionary;

    return (
        <form className="contactForm" onSubmit={props.handleSubmit}>
            {props.requestDone ? (props.sendMailIsSuccessful
                ? <div className="alert success sm">{dictionary.sendMailSuccessAlert}</div>
                : <div className="alert error sm">{dictionary.sendMailFailureAlert}</div>) : ""}

            <Field component={InputText} placeholder={dictionary.name} name="name" validate={[required, maxLength30]} />
            <Field component={InputEmail} placeholder={dictionary.email} name="email" validate={[email]} />
            <Field component={InputText} placeholder={dictionary.subject} name="subject" validate={[required, maxLength200]} />

            <Field component={Textarea} placeholder={dictionary.message} name="message" validate={[required, maxLength200]} />

            <button type="submit" className={"btn md accent mg-top-xl " + (props.sendMailInProgress ? "preloaderMode" : "")}>
                <span className="btn-text">{dictionary.sendText}</span>

                <span className="preloader"><img src="images/loading.gif" alt="loader" /></span>
            </button>
        </form>
    )
}

const ContactFormRXF = reduxForm({ form: 'contactForm' })(ContactForm)

export default Contacts;