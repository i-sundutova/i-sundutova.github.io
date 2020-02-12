import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import AppContainer from './components/app/AppContainer'
import store from './redux-store';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));


registerServiceWorker();