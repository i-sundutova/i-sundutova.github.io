import React from 'react';

export const MainBar = (props) => {
    const [hamburgerMenuShown, setHamburgerMenuShown] = props.hamburgerMenuStatus;

    const changeMenuStatus = () => {
        if (hamburgerMenuShown) setHamburgerMenuShown(!hamburgerMenuShown);
        else return;
    }

    return (
        <div id="main-bar" onClick={changeMenuStatus}>
            {props.children}
        </div>
    );
}