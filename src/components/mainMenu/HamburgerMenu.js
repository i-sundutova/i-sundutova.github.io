import React from 'react';
import { MainMenuContent } from './MainMenuContent'

const HamburgerMenu = (props) => {
    const [hamburgerMenuShown, setHamburgerMenuShown] = props.hamburgerMenuStatus;

    return (
        <div className={"hamburger-menu " + (hamburgerMenuShown ? "shown" : "")}>
            <div className="hamburger-menu-opener" onClick={() => setHamburgerMenuShown(!hamburgerMenuShown)}>menu</div>
            <MainMenuContent {...props} />
        </div>
    )
}

export default HamburgerMenu;