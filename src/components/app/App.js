import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from '../Layout';
import HomeContainer from '../home/HomeContainer';
import ContactsContainer from '../contacts/ContactsContainer';
import NotFound from '../NotFound';

import '../../styles/compiled.scss'

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to={"/" + this.props.currentLanguage} />} />
                    <Route exact path="/:language" render={() => <HomeContainer />} />
                    <Route exact path="/:language/contacts" render={() => <ContactsContainer />} />

                    <Route path="/:language/*" render={() => <NotFound />} />
                </Switch>
            </Layout >
        );
    }
}

export default App;