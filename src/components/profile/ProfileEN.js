import React from 'react';

const ProfileEN = () => {
    return (
        <div className="page" id="pageProfile">
            <h1>Skills & Experience</h1>

            <div className="row">
                <div className="col xs12 md7">
                    <section id="skills">
                        <p><b>Frontend:</b> HTML, CSS/SASS, JS, JQuery, React (no commercial experience), Vue.js, Vuetify.js, Element UI, Materialize, Kendo and other JavaScript libraries (like moment.js, select2 etc.).</p>
                        <p><b>Backend:</b> ASP.NET MVC, Kendo MVC.</p>
                        <p><b>Programming languages:</b> C#, JavaScript.</p>
                        <p>OOP skills, quality of produced code, attention to detail.</p>
                        <p>Experience in using interface design tools (Photoshop, Figma, Zeplin).</p>
                        <p>Using software versioning and revision control systems as TortoiseSVN, Git.</p>
                    </section>
                </div>

                <div className="col xs12 md5">
                    <div id="professionalSummary" className="panel white">
                        <h3 className="mg-top-0">Professional Summary</h3>

                        <p>Web developer with good experience in IT industry, web design and development. Took part in all stages of application development cycle, frontend and backend development.</p>
                    </div>
                </div>
            </div>

            <section id="workExperience">
                <h2>Work Experience</h2>

                <div className="placeOfWork">
                    <h3>One-time project <small>(Aug 2019 - Sept 2019). Rivne, Ukraine</small></h3>

                    <div className="workDescription">
                        <p>Website for Rivne <a href="http://dnz47.rosvita.rv.ua" target="_blank" rel="nofollow noreferrer noopener">kindergarten</a>, non-profit and "for a good cause" project.</p>
                        <p>Developed design and the website itself using HTML, CSS/SCSS, JQuery, Wordpress, snippets of PHP.</p>
                    </div>
                </div>

                <div className="placeOfWork">
                    <h3>Junior/Junior Strong .NET Full Stack developer. Reactive Brains <small>(Apr 2016 - Jan 2019). Minsk, Belarus</small></h3>

                    <div className="workDescription">
                        <ul className="list">
                            <li>Web projects frontend and backend development.</li>
                            <li>Company's branch office in Ukraine management and intermediation.</li>
                            <li>Hiring management, seeking the optimal candidates for the job.</li>
                        </ul>

                        <h4>Projects:</h4>
                        <p><a className="a" href="https://web.archive.org/web/20190131162036/https://www.sfx-markets.com/" target="_blank" rel="nofollow noreferrer noopener">SFX Markets</a> - Licensed Forex Broker. Complex CRM system using the following technologies: C#, ASP.NET MVC, Kendo MVC, SignalR, HTML, CSS/SASS, JS, JQuery, Vue.js, Element UI.</p>
                        <p><a className="a" href="https://web.archive.org/web/20190109161714/https://nordhillcapital.com/" target="_blank" rel="nofollow noreferrer noopener">Nordhill Capital</a> - Investment Fund. The company website and CRM system development using the following technologies: C#, ASP.NET MVC, Kendo MVC, HTML, CSS/SASS, JS, JQuery, Vue.js, Vuetify.js.</p>
                        <p><a className="a" href="https://www.lirunex.com" target="_blank" rel="nofollow noreferrer noopener">Lirunex</a> - Licensed Forex Broker. The company website and CRM system developed by using the following technologies: C#, ASP.NET MVC, Kendo MVC, SignalR, HTML, CSS/SASS, JS, JQuery, Vue.js, Element UI.</p>
                        <p><a className="a" href="https://web.archive.org/web/20190509130215/http://rossi-solutions.com/" target="_blank" rel="nofollow noreferrer noopener">Rossi Solutions</a> - one-page business card website.</p>
                        <p><a className="a" href="https://web.archive.org/web/20190515165925/http://sfxglobal.com/" target="_blank" rel="nofollow noreferrer noopener">SFX Global</a> - one-page business card website.</p>
                        <p><a className="a" href="https://web.archive.org/web/20180330055502/http://reactive-brains.com/" target="_blank" rel="nofollow noreferrer noopener">Reactive Brains</a> - one-page business card website.</p>
                    </div>
                </div>

                <div className="placeOfWork">
                    <h3>Freelance <small>(Aug 2014 - Apr 2016)</small></h3>

                    <div className="workDescription">
                        <ul className="list">
                            <li>Russian-English translation services</li>
                            <li>Frontend development (HTML, CSS, JS)</li>
                        </ul>
                    </div>
                </div>

                <div className="placeOfWork">
                    <h3>DBA and SEO consultant. Tokyo Weekender (English magazine in Japan) <small>(Jan 2011 – Apr 2014, Remote)</small></h3>

                    <div className="workDescription">
                        <ul className="list">
                            <li>Content management in Wordpress environment</li>
                            <li>Optimizing content for SEO</li>
                            <li>Statistical analysis and data processing</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="row">
                <div className="col xs12 md7">
                    <section id="education">
                        <h2>Education</h2>
                        <h3>Lviv Polytechnic National University <small>(2006-2012)</small></h3>

                        <ul className="list">
                            <li><b>Institute:</b> Institute of Computer Science and Information Technologies</li>
                            <li><b>Faculty:</b> Applied Linguistics (Philology)</li>
                            <li><b>Degree:</b> Master (with honors)</li>
                        </ul>
                    </section>
                </div>

                <div className="col xs12 md5">
                    <section id="additionalInfo" className="panel white">
                        <h3>Additional information</h3>

                        <p><strong>Languages:</strong> English (intermediate), Russian.</p>
                        <p><strong>Marital status:</strong> married.</p>
                        <p><strong>Age:</strong> 30 years old.</p>
                        <p><strong>Hobby:</strong> photography.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ProfileEN;