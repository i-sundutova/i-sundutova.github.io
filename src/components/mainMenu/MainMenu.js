import React from 'react';
import { MainMenuContent } from './MainMenuContent';

const MainMenu = (props) => {
    return (
        <div className="main-menu">
            <MainMenuContent {...props} />
        </div>
    )
}

export default MainMenu;