import React from 'react';
import { LanguageSwitcher } from './partials/LanguageSwitcher';
import { MainMenu } from './MainMenu';

export const SideBar = (props) => {

    return (
        <div id="side-bar">
            <div className="logo"></div>

            <MainMenu language={props.store._state.language} />

            <LanguageSwitcher store={props.store} />
        </div>)
}