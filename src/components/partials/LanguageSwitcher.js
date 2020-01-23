import React from 'react';
import { Languages } from '../../utils/Languages';

export const LanguageSwitcher = (props) => {
    let lang = props.store._state.language;

    let changeLanguage = (lang) => {
        props.store.changeLanguage(lang);
    }

        return (
            <div className="language-switcher">
                <span className={"language" + (lang == Languages.EN ? " disabled" : "")} onClick={() => changeLanguage(Languages.EN)}>en</span>
                <span className={"language" + (lang == Languages.UA ? " disabled" : "")} onClick={() => changeLanguage(Languages.UA)}>ua</span>
            </div>);
}