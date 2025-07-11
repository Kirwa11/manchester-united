import React from "react";
import bgg from '../assets/bgg.jpeg';


const Home = () => (
    <div className="home" style={{ backgroundImage: `url(${bgg})` }}>
        <div className="overlay">
            <h1>Welcome to Manchester United</h1>
            <p className="subtitle">The Theatre of Dreams</p>
            <p>Passion. Glory. Tradition.</p>
        </div>
    </div>
);

export default Home;