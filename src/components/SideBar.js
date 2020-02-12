import React from 'react';
import LanguageSwitcherContainer from './languageSwitcher/LanguageSwitcherContainer';
import MainMenu from './MainMenu';

export const SideBar = (props) => {

    return (
        <div id="side-bar">
            <div className="logo"></div>

            <MainMenu />

            <LanguageSwitcherContainer />
        </div>)
}