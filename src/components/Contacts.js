import React from 'react';
import { Languages } from '../utils/Languages';

export const Contacts = (props) => {

    let enDictionary = { pageName: 'Contacts' };
    let uaDictionary = { pageName: 'Контакти' };


    if (props.language == Languages.EN) {
        return <ContactsContent dictionary={enDictionary} />
    }
    else { return <ContactsContent dictionary={uaDictionary} /> }
}


const ContactsContent = (props) => {
    return (
        <div>
            <h1>{props.dictionary.pageName}</h1>
        </div>
    )
}