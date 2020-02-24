import React from 'react';
import Particles from 'react-particles-js';


const Home = (props) => {
    return (
        <div className="page" id="pageHome">
            <Particles className="particlesContainer"
                params={{
                    "particles": { "number": { "value": 50 }, "size": { "value": 3 }, color: { value: '#ffbf00' } },
                    "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } }
                }} />

            <div className="introductionContainer">
                <div className="name"><span className="monoton">I</span>{props.dictionary.name}</div>
                <div className="surname">{props.dictionary.surname}</div>
                <p>{props.dictionary.text}</p>

                <div className="summary">
                    <p>{props.dictionary.introduction}</p>

                    <div className="gitLink">
                            <img src="/images/logo-github-32x32.png" alt="GitHub" />
                            <a className="a" href="https://github.com/i-sundutova/i-sundutova.github.io/tree/profile-project" target="_blank" rel="nofollow noreferrer noopener">Github</a>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Home;