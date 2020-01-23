import React, { Component } from 'react';
import { SideBar } from './SideBar';
import { MainBar } from './MainBar';

export const Layout = (props) => {

    return (
        <div id="main-container">
            <SideBar store={props.store} />

            <MainBar>
                {props.children}
            </MainBar>
      </div>
    );
}
