import React from 'react';
import Home from './Home';
import { compose } from 'redux'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom';
import { localizationCheck } from '../../hoc/localization';
import { Languages } from '../../utils/Languages';


class HomeContainer extends React.Component {
    render() {
        let enDictionary = {
            name: 'ryna', surname: 'Martyniuk', text: 'web developer',
            introduction: 'Dedicated to work, active and responsible web-based applications developer, creating products I want to be proud of. ' +
                'Here I am presenting my profile website, where you can find my resume and contact me pages. This website is developed using ReactJS, source code of which you can find on github environment and familiarize yourself slightly with my style of work.'
        };

        let uaDictionary = {
            name: 'рина', surname: 'Мартинюк', text: 'web developer',
            introduction: 'Віддана роботі, активна і відповідальна. Розробник веб-додатків, якими хочу пишатися. ' +
                'Представляю веб-сайт свого профілю, де ви можете знайти моє резюме та сторінку контактів. Цей веб-сайт розроблений за допомогою ReactJS, код якого ви можете знайти в середовищі github та трохи ознайомитись із моїм стилем роботи.'
        };

        switch (this.props.currentLanguage) {
            case Languages.UA: return <Home dictionary={uaDictionary} />;
            default: return <Home dictionary={enDictionary} />
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
)(HomeContainer);