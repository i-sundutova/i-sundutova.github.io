import React from 'react'
import { connect } from "react-redux"
import { compose } from 'redux'
import { Redirect, withRouter } from "react-router-dom"
import { changeLanguageActionCreator } from '../reducers/languageReducer'

import { languageIsValid, setLanguageCookie } from '../utils/helpers'

const mapStateToPropsForRedirect = (state) => {
    return {
        currentLanguage: state.siteLanguage.currentLanguage
    }
}

const mapDispatchToPropsForRedirect = (dispatch) => {
    return {
        changeLanguage: (language) => dispatch(changeLanguageActionCreator(language))
    }
}

export const localizationCheck = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            const currentLanguage = this.props.currentLanguage;
            const currentPathname = this.props.location.pathname;
            const urlLanguage = this.props.match.params.language;

            var languageMatch = document.cookie.match(new RegExp('(^| )portfolio-lang=([^;]+)'));

            if (languageMatch) {
                let languageCookie = languageMatch[2];

                if (languageIsValid(languageCookie)) {
                    if (languageCookie === urlLanguage) return <Component {...this.props} />;

                    else {
                        if (languageIsValid(urlLanguage)) {
                            setLanguageCookie(urlLanguage);

                            if (urlLanguage !== currentLanguage) this.props.changeLanguage(urlLanguage);
                        }
                        else {
                            return <Redirect to={'/' + languageCookie + currentPathname} />
                        }
                    }
                }
                else {
                    setLanguageCookie('', 'expires=Thu, 01 Jan 1970 00:00:01 GMT;');
                    return <Redirect to={'/' + currentLanguage + currentPathname} />
                }
            }
            else {
                if (languageIsValid(urlLanguage)) {
                    if (urlLanguage !== currentLanguage) this.props.changeLanguage(urlLanguage);
                    setLanguageCookie(urlLanguage);
                }
                else {
                    return <Redirect to={'/' + currentLanguage + currentPathname} />
                }
            }

            return <Component {...this.props} />;
        }
    }

    const ConnectedRedirectComponent = compose(
        connect(mapStateToPropsForRedirect, mapDispatchToPropsForRedirect),
        withRouter
    )(RedirectComponent);

    return ConnectedRedirectComponent;
}