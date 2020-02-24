import React from 'react';
import { connect } from "react-redux"
import { changeLanguageActionCreator } from '../../reducers/languageReducer';
import { Languages } from '../../utils/Languages';
import { languageIsValid, setLanguageCookie } from '../../utils/helpers'
import App from './App';


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { defaultLanguage: Languages.EN };

        var languageMatch = document.cookie.match(new RegExp('(^| )portfolio-lang=([^;]+)'));
        if (languageMatch) {
            let cookieLanguage = languageMatch[2];

            if (languageIsValid(cookieLanguage)) {
                if (cookieLanguage !== props.currentLanguage) {
                    this.state = { defaultLanguage: cookieLanguage };
                    props.changeLanguage(cookieLanguage);
                }
            }
            else { setLanguageCookie('', 'expires=Thu, 01 Jan 1970 00:00:01 GMT;'); }
        }
    }

    render() {
        return (
            <App currentLanguage={this.state.defaultLanguage} />
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);