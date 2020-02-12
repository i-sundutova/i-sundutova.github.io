import { createStore, combineReducers } from "redux";

import { languageReducer } from "./reducers/languageReducer";

let reducers = combineReducers({
    siteLanguage: languageReducer
});

let store = createStore(reducers);

export default store;