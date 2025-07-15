import React from "react";
import bgg from '../assets/bgg.jpeg';

const Home = () => (
    <div className="home" style={{ backgroundImage: `url(${bgg})` }}>
        <div className="overlay">
            <h1>Manchester United</h1>
            <p className="motto">“Glory Glory Man United”</p>
            <button className="cta-btn">See Latest News</button>
            <div className="quick-stats">
                <div>
                    <i className="fas fa-trophy"></i>
                    <span>20 League Titles</span>
                </div>
                <div>
                    <i className="fas fa-users"></i>
                    <span>Millions of Fans</span>
                </div>
                <div>
                    <i className="fas fa-calendar-alt"></i>
                    <span>Founded 1878</span>
                </div>
            </div>
            <div className="video-wrapper" style={{ marginTop: "2rem" }}>
                <h2>Watch the Anthem</h2>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/jdza9F0IzxE"
                    title="Manchester United Song"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
);

export default Home;