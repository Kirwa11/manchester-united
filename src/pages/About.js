import React from "react";
import manu from '../assets/manu.png'; // Ensure this image exists


const About = () => (
    <div className="about-container">
            <div className="about-card">
                    <img src={manu} alt="Manchester United Logo" className="about-logo" />
                    <div className="about-content">
                            <h2>About Manchester United</h2>
                            <p>
                                    Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England. Founded in 1878 as Newton Heath LYR F.C., the club changed its name to Manchester United in 1902.
                            </p>
                            <p>
                                    Manchester United is one of the most successful clubs in English football history, having won numerous domestic and international titles, including the Premier League, FA Cup, and UEFA Champions League.
                            </p>
                            <p>
                                    The club's home ground is Old Trafford, which has a capacity of over 74,000 spectators. Manchester United has a large and passionate fan base worldwide, known for their iconic red jerseys and the famous "Theatre of Dreams" nickname for their stadium.
                            </p>
                            <p>
                                    Manchester United has a rich history and has been home to many legendary players, including Sir Bobby Charlton, George Best, Eric Cantona, and Cristiano Ronaldo.
                            </p>
                            <div className="about-fact">
                                    <strong>Did you know?</strong> Manchester United was the first English club to win the European Cup (now UEFA Champions League) in 1968!
                            </div>
                    </div>
            </div>
    </div>
);

export default About;