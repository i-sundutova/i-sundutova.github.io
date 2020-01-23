import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Contacts } from './components/Contacts';

import './styles/compiled.scss'



const App = (props) => {
    let language = props.store._state.language;

    debugger;

    return (
        <Layout store={props.store} >
                <Switch>
                {/*<Route path="/" exact render={() => { return <Redirect to={language} /> }} />*/}
                    <Route path={"/" + language} exact render={propRouter => <Home {...propRouter} language={language} />} />
                    <Route path={"/" + language + "/contacts"} render={propRouter => <Contacts {...propRouter} language={language} />} />

                    <Route path="*" render={propRouter => <NoFound {...propRouter} />} />
                </Switch> 
            </Layout >
        );
}


const NoFound = (props) => {
    return <div>
        <h1>404</h1>
    </div>
}


export default App;