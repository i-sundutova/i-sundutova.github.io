import React from 'react';
import { compose } from 'redux'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { localizationCheck } from '../../hoc/localization';
import NotFound from './NotFound';
import { Languages } from '../../utils/Languages';

class NotFoundContainer extends React.Component {
    render(){
        let enDictionary = { message: 'Sorry, page not found' };
        let uaDictionary = { message: 'Сторінка не знайдена' };

        switch (this.props.currentLanguage) {
            case Languages.UA: return <NotFound dictionary={uaDictionary} />;
            default: return <NotFound dictionary={enDictionary} />
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
    localizationCheck,
    withRouter
)(NotFoundContainer);