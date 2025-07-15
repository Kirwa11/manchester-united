import React from "react";
import manu from '../assets/manu.png'; // Ensure this image exists


const About = () => (
    <div className="about-container">
            <div className="about-card">
                    <img src={manu} alt="Manchester United Logo" className="about-logo" />
                    <div className="about-content">
                            <h2>About Manchester United</h2>
                            <p>
                                    Manchester United Football Club was originally founded in <span className="highlight">1878</span> under the name Newton Heath LYR Football Club...
                                    In <span className="highlight">1902</span>, after facing financial difficulties, the club was rescued by local brewery owner John Henry Davies...
                                    The early team played at North Road in Newton Heath before moving to Bank Street and later, in <span className="highlight">1910</span>, to their permanent home at Old Trafford...
                                    Manchester United’s first major success came in <span className="highlight">1908</span>, when they won the First Division title, followed by an FA Cup win in <span className="highlight">1909</span>...
                                    In <span className="highlight">1958</span>, the club was devastated by the Munich Air Disaster...
                                    ...the first English club to win the European Cup in <span className="highlight">1968</span>.
                                    The club’s golden era came under <span className="highlight">Sir Alex Ferguson</span>...
                                    ...including <span className="highlight">13 Premier League titles</span>, <span className="highlight">5 FA Cups</span>, and <span className="highlight">2 UEFA Champions League trophies</span>.
                                    The highlight came in <span className="highlight">1999</span>, when United achieved a historic <span className="highlight">Treble</span>...
                            </p>
                            <div className="about-fact">
                                    <strong>Did you know?</strong> Manchester United was the first English club to win the European Cup (now UEFA Champions League) in 1968!
                            </div>
                    </div>
            </div>
            <div className="achievements-card">
                    <img src={manu} alt="Manchester United Logo" className="about-logo" />
                    <h2>Club Achievements</h2>
                    <ul className="achievements-list">
                            <li><i className="fas fa-trophy"></i> 20 English League Titles</li>
                            <li><i className="fas fa-trophy"></i> 12 FA Cups</li>
                            <li><i className="fas fa-trophy"></i> 3 UEFA Champions League Titles</li>
                            <li><i className="fas fa-trophy"></i> 1 FIFA Club World Cup</li>
                            <li><i className="fas fa-trophy"></i> 21 FA Community Shields</li>
                            <li><i className="fas fa-trophy"></i> 1 UEFA Europa League Title</li>
                            <li><i className="fas fa-trophy"></i> 1 UEFA Super Cup</li>
                            <li><i className="fas fa-trophy"></i> 1 Intercontinental Cup</li>
                    </ul>
            </div>
    </div>

);

export default About;