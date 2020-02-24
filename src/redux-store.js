import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { languageReducer } from './reducers/languageReducer';
import { contactsReducer } from './reducers/contactsReducer';

let reducers = combineReducers({
    siteLanguage: languageReducer,
    form: formReducer,
    contacts: contactsReducer
});

let store = createStore(reducers);

export default store;