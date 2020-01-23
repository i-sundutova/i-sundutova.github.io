import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from '../../App';
import { Languages } from '../../utils/Languages';

export const LanguageContainer = (props) => {

    props.store.checkLanguage();
   

    return (
        //<Switch>
        //    <Route path="/" exact render={() => { return <Redirect to={language} /> }} />
        //    <Route path="/*" render={propsRouter => <App {...propsRouter} language={language} setLanguage={this.setLanguage} />} />
        //</Switch>

        <App store={props.store} />
    )
}