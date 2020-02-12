import React, { Component } from 'react';
import { connect } from "react-redux"
import { LanguageSwitcher } from "./LanguageSwitcher"

import { changeLanguageActionCreator } from "../../reducers/languageReducer"

class LanguageSwitcherContainer extends Component {
    onLanguageChanged = (language) => {
        const url = '/' + language + window.location.pathname.substring(3);
        window.location.href = url;
    }

    render() {
        return (
            <LanguageSwitcher currentLanguage={this.props.currentLanguage}
                onLanguageChanged={this.onLanguageChanged}
                changeLanguage={this.props.changeLanguage} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentLanguage: state.siteLanguage.currentLanguage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (language) => dispatch(changeLanguageActionCreator(language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcherContainer);