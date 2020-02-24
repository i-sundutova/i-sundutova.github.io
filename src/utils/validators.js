import { FieldIsRequiredMessage, EmailIsInvalidMessage, MaxLengthExceededMessage } from "./resources";


export const required = (value) => {
    if (value) return undefined;

    return FieldIsRequiredMessage();
}

export const email = (value) => {
    if (value) return undefined;

    return EmailIsInvalidMessage();
}

export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) return MaxLengthExceededMessage(maxLength);

    return undefined;
}

export const maxLength30 = maxLength(30);
export const maxLength100 = maxLength(100);
export const maxLength200 = maxLength(200);