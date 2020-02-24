import React from 'react';
import ProfileUA from './ProfileUA';
import ProfileEN from './ProfileEN';
import { compose } from 'redux'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { localizationCheck } from '../../hoc/localization';
import { Languages } from '../../utils/Languages';


class ProfileContainer extends React.Component {
    render() {
        switch (this.props.currentLanguage) {
            case Languages.UA: return <ProfileUA />;
            default: return <ProfileEN />
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
)(ProfileContainer);