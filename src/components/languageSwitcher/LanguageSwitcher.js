import React from 'react';
import { Languages } from '../../utils/Languages';

export const LanguageSwitcher = (props) => {
    let currentLanguage = props.currentLanguage;

    let changeLanguage = (lang) => {
        props.onLanguageChanged(lang);
        props.changeLanguage(lang);
    }

        return (
            <div className="language-switcher">
                <span className={"language" + (currentLanguage === Languages.EN ? " disabled" : "")} onClick={() => changeLanguage(Languages.EN)}>en</span>
                <span className={"language" + (currentLanguage === Languages.UA ? " disabled" : "")} onClick={() => changeLanguage(Languages.UA)}>ua</span>
            </div>);
}