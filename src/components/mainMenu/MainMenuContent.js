import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenuContent = (props) => {
      
    return (
        <>
            <Link to={'/' + props.language} className="menu-item">
                <span className="item">{props.dictionary.home}</span>
            </Link>

            <Link to={'/' + props.language + '/profile'} className="menu-item">
                <span className="item">{props.dictionary.profile}</span>
            </Link>

            <Link to={'/' + props.language + '/contacts'} className="menu-item">
                <span className="item">{props.dictionary.contacts}</span>
            </Link>
        </>
    )
}