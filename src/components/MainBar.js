import React, { Component } from 'react';

export class MainBar extends Component {
    static displayName = MainBar.name;

    render() {
        return (
            <div id="main-bar">
                {this.props.children}
            </div>
        );
    }
}