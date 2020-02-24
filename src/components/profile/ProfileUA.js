import React from 'react';

const ProfileEN = () => {
    return (
        <div className="page" id="pageProfile">
            <h1>Навики та досвід</h1>

            <div className="row">
                <div className="col xs12 md7">
                    <section id="skills">
                        <p><b>Фронтенд:</b> HTML, CSS/SASS, JS, JQuery, React (без комерційного досвіду), Vue.js, Vuetify.js, Element UI, Materialize, Kendo та інші JavaScript бібліотеки (наприклад: moment.js, select2, тощо).</p>
                        <p><b>Бекенд:</b> ASP.NET MVC, Kendo MVC.</p>
                        <p><b>Мови програмування:</b> C#, JavaScript.</p>
                        <p>Знання ООП, якісний код, увага до деталей.</p>
                        <p>Досвід використання інструментів для дизайну інтерфейсів (Photoshop, Figma, Zeplin).</p>
                        <p>Використання систем контролю версій таких як TortoiseSVN, Git.</p>
                    </section>
                </div>

                <div className="col xs12 md5">
                    <div id="professionalSummary" className="panel white">
                        <h3 className="mg-top-0">Коротко</h3>

                        <p>Веб-розробник з хорошим досвідом роботи в ІТ-галузі, веб дизайні та розробці. Брала участь у всіх етапах розробки, фронтенду та бекенду.</p>
                    </div>
                </div>
            </div>

            <section id="workExperience">
                <h2>Досвід роботи</h2>

                <div className="placeOfWork">
                    <h3>Разовий проект <small>(Серпень 2019 - Вересень 2019). Рівне, Україна</small></h3>

                    <div className="workDescription">
                        <p>Вебсайт для <a href="http://dnz47.rosvita.rv.ua" target="_blank" rel="nofollow noreferrer noopener">дитячого садка</a> в м.Рівне (безоплатний проект).</p>
                        <p>Розробка дизайну і самого сайту, використовуючи HTML, CSS/SCSS, JQuery, Wordpress, фрагменти PHP.</p>
                    </div>
                </div>

                <div className="placeOfWork">
                    <h3>Junior/Junior Strong .NET Full Stack розробник. Reactive Brains <small>(Квітень 2016 - Січень 2019). Мінськ, Білорусь</small></h3>

                    <div className="workDescription">
                        <ul className="list">
                            <li>Фронтенд і бекенд розробка веб-проектів.</li>
                            <li>Посередництво та упраління філією компнанії в Україні.</li>
                            <li>Організація працевлаштування, пошук оптимальних кандидатів на роботу в компанію.</li>
                        </ul>

                        <h4>Проекти:</h4>
                        <p><a className="a" href="https://www.sfx-markets.com" target="_blank" rel="nofollow noreferrer noopener">SFX Markets</a> - Ліцензований брокер Forex. Складна CRM-система з використанням наступних технологій: C#, ASP.NET MVC, Kendo MVC, SignalR, HTML, CSS/SASS, JS, JQuery, Vue.js, Element UI.</p>
                        <p><a className="a" href="https://nordhillcapital.com" target="_blank" rel="nofollow noreferrer noopener">Nordhill Capital</a> - Інвестиційний фонд. Розробка веб-сайту компанії та CRM-системи з використанням наступних технологій: C#, ASP.NET MVC, Kendo MVC, HTML, CSS/SASS, JS, JQuery, Vue.js, Vuetify.js.</p>
                        <p><a className="a" href="https://www.lirunex.com" target="_blank" rel="nofollow noreferrer noopener">Lirunex</a> - Ліцензований брокер Forex. Розробка веб-сайту компанії та CRM-системи з використанням наступних технологій: C#, ASP.NET MVC, Kendo MVC, SignalR, HTML, CSS/SASS, JS, JQuery, Vue.js, Element UI.</p>
                        <p><a className="a" href="http://rossi-solutions.com" target="_blank" rel="nofollow noreferrer noopener">Rossi Solutions</a> - сайт-візитка.</p>
                        <p><a className="a" href="http://sfxglobal.com" target="_blank" rel="nofollow noreferrer noopener">SFX Global</a> - сайт-візитка.</p>
                        <p><a className="a" href="http://reactive-brains.com" target="_blank" rel="nofollow noreferrer noopener">Reactive Brains</a> - сайт-візитка.</p>
                    </div>
                </div>

                <div className="placeOfWork">
                    <h3>Фріланс <small>(Серпень 2014 - Квітень 2016)</small></h3>

                    <div className="workDescription">
                        <ul className="list">
                            <li>Послуги перекладу (російська-англійська).</li>
                            <li>Фронтенд розробка (HTML, CSS, JS)</li>
                        </ul>
                    </div>
                </div>

                <div className="placeOfWork">
                    <h3>DBA та SEO консультант. Tokyo Weekender (Англійський журнал в Японії) <small>(Січень 2011 – Квітень 2014, дистанційно)</small></h3>

                    <div className="workDescription">
                        <ul className="list">
                            <li>Управління контентом у середовищі Wordpress</li>
                            <li>Оптимізація контенту для SEO</li>
                            <li>Статистичний аналіз та обробка даних</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="row">
                <div className="col xs12 md7">
                    <section id="education">
                        <h2>Освіта</h2>
                        <h3>Національний університет "Львівська політехніка" <small>(2005-2011)</small></h3>

                        <ul className="list">
                            <li><b>Інститут:</b> Інститут комп'ютерних наук та інформаційних технологій</li>
                            <li><b>Спеціальність:</b> Прикладна лінгвістика (Філологія)</li>
                            <li><b>Ступінь:</b> Магістр (з відзнакою)</li>
                        </ul>
                    </section>
                </div>

                <div className="col xs12 md5">
                    <section id="additionalInfo" className="panel white">
                        <h3>Додаткова інформація</h3>

                        <p><strong>Мови:</strong> Англійська (intermediate), Російська.</p>
                        <p><strong>Сімейний стан:</strong> одружена.</p>
                        <p><strong>Вік:</strong> 30 років.</p>
                        <p><strong>Хобі:</strong> фотозйомка.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProfileEN;