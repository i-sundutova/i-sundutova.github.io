import { createStore, combineReducers } from "redux";
import { languageReducer } from "./reducers";

let reducers = combineReducers({
    languageData: languageReducer
});


let store = createStore(reducers);

export default store;