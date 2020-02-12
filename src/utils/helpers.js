import { Languages } from "./Languages";

export function languageIsValid(language) {
    return language === Languages.UA || language === Languages.EN
}

export function setLanguageCookie(language, expires = '') {
    document.cookie = "portfolio-lang=" + language + "; path=/;" + expires;
}