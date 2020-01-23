import { Languages } from "./utils/Languages.js";

let store = {
    _state: {
        language: Languages.EN
    },

    checkLanguage() {
        debugger;

        let lang = window.localStorage.getItem('portfolio-lang');

        if (lang === null || lang == 'undefined') this.setLanguage(Languages.EN);

        else if ((lang === Languages.EN || lang === Languages.UA) && lang !== this._state.language) this.setLanguage(lang);


        let urlLanguage = window.location.pathname.substring(0, 4);

        if (urlLanguage.match(`/${Languages.EN}`) !== null || urlLanguage.match(`/${Languages.UA}`) !== null) {

            urlLanguage = urlLanguage.substring(1, 3);

            if (this._state.language !== urlLanguage) this.setLanguage(urlLanguage);
        }

    },

    setLanguage(newLang) {
        debugger;

        window.localStorage.setItem('portfolio-lang', newLang);
        this._state.language = newLang;
    },

    changeLanguage(newLanguage) {
        debugger;

        let pathname = window.location.pathname;
        let urlLanguage = pathname.substring(0, 4);

        let url = '';

        if (urlLanguage.match('/' + Languages.EN) !== null || urlLanguage.match('/' + Languages.UA) !== null) {

            if (urlLanguage.match('[a-z]{2}') == newLanguage) return;

            url = '/' + newLanguage + pathname.substring(3);
        }
        else {
            url = '/' + newLanguage + pathname;
        }

        //this.props.history.push(url);
        window.location.href = url;
    }
}

export default store;