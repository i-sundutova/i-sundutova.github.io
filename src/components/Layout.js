import React from 'react';
import { SideBar } from './SideBar';
import { MainBar } from './MainBar';

export const Layout = (props) => {
    return (
        <div id="main-container">
            <SideBar />

            <MainBar>
                {props.children}
            </MainBar>
      </div>
    );
}
