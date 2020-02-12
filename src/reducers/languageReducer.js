import { Languages } from "../utils/Languages";

const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

let initialState = { currentLanguage: Languages.EN };

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE: return {
            ...state,
            currentLanguage: action.language
        };
        default:
            return state;
    }
}

export const changeLanguageActionCreator = (language) => ({ type: CHANGE_LANGUAGE, language });