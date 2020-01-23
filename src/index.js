import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageContainer } from './components/partials/LanguageContainer';
import registerServiceWorker from './registerServiceWorker';

import store from './store.js'


ReactDOM.render(
    <Router>
        <LanguageContainer store={store} />
    </Router>,
    document.getElementById('root'));

registerServiceWorker();

