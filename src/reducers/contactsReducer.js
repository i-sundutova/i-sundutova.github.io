const SEND_MAIL_INPROGRESS = 'SEND_MAIL_INPROGRESS';
const SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS';
const SEND_MAIL_FAILURE = 'SEND_MAIL_FAILURE';

let initialState = { mailRequestInProgress: false, mailRequestIsSuccessful: false };

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MAIL_INPROGRESS: return {
            ...state,
            mailRequestInProgress: true
        };
        case SEND_MAIL_SUCCESS: return {
            ...state,
            mailRequestInProgress: false,
            mailRequestIsSuccessful: true
        };
        case SEND_MAIL_FAILURE: return {
            ...state,
            mailRequestInProgress: false,
            mailRequestIsSuccessful: false
        };
        default:
            return state;
    }
}

export const sendMailActionCreator = () => ({ type: SEND_MAIL_INPROGRESS });
export const sendMailSuccessActionCreator = () => ({ type: SEND_MAIL_SUCCESS });
export const sendMailFailureActionCreator = () => ({ type: SEND_MAIL_FAILURE });