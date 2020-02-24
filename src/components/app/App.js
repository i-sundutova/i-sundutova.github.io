import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Layout } from '../Layout';
import HomeContainer from '../home/HomeContainer';
import ProfileContainer from '../profile/ProfileContainer';
import ContactsContainer from '../contacts/ContactsContainer';
import NotFoundContainer from '../notFound/NotFoundContainer';

import '../../styles/compiled.scss'

class App extends React.Component {
    render() {
        return (
            <Layout>
                <TransitionGroup component={null}>
                    <CSSTransition key={this.props.location.key} classNames="transition-fade" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route exact path="/" render={() => <Redirect to={"/" + this.props.currentLanguage} />} />
                            <Route exact path="/:language" render={() => <HomeContainer />} />
                            <Route exact path="/:language/profile" render={() => <ProfileContainer />} />
                            <Route exact path="/:language/contacts" render={() => <ContactsContainer />} />

                            <Route path="/:language/*" render={() => <NotFoundContainer />} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Layout >
        );
    }
}

export default withRouter(App);