import { SET_LANGUAGE, CHANGE_LANGUAGE } from "./actionTypes.js";
import { Languages } from "./utils/Languages.js";


let initialState = { language: Languages.EN };

export const languageReducer = (state = initialState, action) => {

    
    switch (action.type) {
        case SET_LANGUAGE: return alert('Set');
        case CHANGE_LANGUAGE: return alert('Change');
        //default
    }
}