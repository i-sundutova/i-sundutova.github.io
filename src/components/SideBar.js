import React from 'react';
import LanguageSwitcherContainer from './languageSwitcher/LanguageSwitcherContainer';
import MainMenuContainer from './mainMenu/MainMenuContainer';

export const SideBar = (props) => {
    return (
        <div id="side-bar">
            <div className="logo"></div>

            <MainMenuContainer hamburgerMenuStatus={props.hamburgerMenuStatus}/>

            <LanguageSwitcherContainer />
        </div>)
}