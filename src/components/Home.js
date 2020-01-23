import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Languages } from '../utils/Languages';


export class Home extends Component {
    static displayName = Home.name;

    render() {

        let enDictionary = { name: 'ryna', surname: 'Martyniuk', text: 'web developer' };
        let uaDictionary = { name: 'рина', surname: 'Мартинюк', text: 'web developer' };
        

        if (this.props.language === Languages.EN) {
            return <HomeContent dictionary={enDictionary} />
        }
        else { return <HomeContent dictionary={uaDictionary} /> }
    }
}


const HomeContent = (props) => {
    return (
        <div id="page-home">
            <Particles className="particles-container"
                params={{
                    "particles": { "number": { "value": 50 }, "size": { "value": 3 }, color: { value: '#ffbf00' } },
                    "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } }
                }} />

            <div className="introduction-container">
                <div className="name"><span className="monoton">I</span>{props.dictionary.name}</div>
                <div className="surname">{props.dictionary.surname}</div>
                <p>{props.dictionary.text}</p>
            </div>
        </div>
    )
}