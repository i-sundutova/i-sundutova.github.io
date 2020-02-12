import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Languages } from '../utils/Languages';

import { connect } from "react-redux"

class MainMenu extends Component {
    render() {
        let language = this.props.currentLanguage;

        let enDictionary = { home: 'home', skills: 'skills', contacts: 'contacts' };
        let uaDictionary = { home: 'головна', skills: 'навики', contacts: 'контакти' };
        

        if (language === Languages.EN) {
            return <MainMenuContent dictionary={enDictionary} language={language} />
        }
        else {
            return <MainMenuContent dictionary={uaDictionary} language={language} />
        }
    }
}


const MainMenuContent = (props) => {
    return (
        <div className="main-menu">
            <Link to={'/' + props.language} className="menu-item">
                <span className="item">{props.dictionary.home}</span>
            </Link>

            <Link to={'/' + props.language + '/skills'} className="menu-item">
                <span className="item">{props.dictionary.skills}</span>
            </Link>

            <Link to={'/' + props.language + '/contacts'} className="menu-item">
                <span className="item">{props.dictionary.contacts}</span>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentLanguage: state.siteLanguage.currentLanguage
    }

}

export default connect(mapStateToProps, null)(MainMenu);