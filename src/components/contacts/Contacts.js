import React from 'react';
import { Languages } from '../../utils/Languages';

const Contacts = (props) => {
    let language = props.currentLanguage;

    let enDictionary = { pageName: 'Contacts' };
    let uaDictionary = { pageName: 'Контакти' };

    if (language === Languages.EN) {
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

export default Contacts;