import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { Languages } from '../../utils/Languages';
import MainMenu from './MainMenu';
import HamburgerMenu from './HamburgerMenu'

class MainMenuContainer extends Component {
    toggleActiveMenuItem (location) {
        document.querySelectorAll('a.menu-item').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('a.menu-item[href="' + location.pathname + '"]').forEach(el => el.classList.add('active'));
    }

    componentDidMount() { this.toggleActiveMenuItem(this.props.location); }
    componentDidUpdate() { this.toggleActiveMenuItem(this.props.location);}

    render() {
        let language = this.props.currentLanguage;

        let enDictionary = { home: 'home', profile: 'profile', contacts: 'contacts' };
        let uaDictionary = { home: 'головна', profile: 'профіль', contacts: 'контакти' };

        if (language === Languages.EN) {
            return (
                <>
                    <MainMenu dictionary={enDictionary} language={language} />
                    <HamburgerMenu dictionary={enDictionary} language={language} hamburgerMenuStatus={this.props.hamburgerMenuStatus} />
                </>
            )
        }
        else {
            return (
                <>
                    <MainMenu dictionary={uaDictionary} language={language} />
                    <HamburgerMenu dictionary={uaDictionary} language={language} hamburgerMenuStatus={this.props.hamburgerMenuStatus} />
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentLanguage: state.siteLanguage.currentLanguage
    }
}

export default compose(
    connect(mapStateToProps),
    withRouter
)(MainMenuContainer);