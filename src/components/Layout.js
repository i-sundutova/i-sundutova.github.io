import React, {useState} from 'react';
import { SideBar } from './SideBar';
import { MainBar } from './MainBar';

export const Layout = (props) => {
    const hamburgerMenuStatus = useState(false);

    return (
        <div id="main-container">
            <SideBar hamburgerMenuStatus={hamburgerMenuStatus} />

            <MainBar hamburgerMenuStatus={hamburgerMenuStatus}>
                {props.children}
            </MainBar>
      </div>
    );
}
