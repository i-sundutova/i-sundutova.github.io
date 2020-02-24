import store from '../redux-store'
import { Languages } from './Languages'

export const FieldIsRequiredMessage = () => {
    const language = store.getState().siteLanguage.currentLanguage;

    switch (language) {
        case Languages.UA: return "Обов'язкове поле";
        default: return "Field is required"
    }
}

export const EmailIsInvalidMessage = () => {
    const language = store.getState().siteLanguage.currentLanguage;
    
    switch (language) {
        case Languages.UA: return "Email невірний";
        default: return "Email is invalid"
    }
}

export const MaxLengthExceededMessage = (maxLength) => {
    const language = store.getState().siteLanguage.currentLanguage;
    
    switch (language) {
        case Languages.UA: return "Максимальна кількість символів - " + maxLength;
        default: return "Max length is " + maxLength + " symbols"
    }
}