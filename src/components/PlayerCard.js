import React from "react";

const PlayerCard = ({ player }) => (
    <div className="player-card">
        <img src={player.image} alt={player.name} className="player-card-img" />
        <h3>{player.name}</h3>
        <p className="player-card-number">#{player.number}</p>
        <p className="player-card-nationality">{player.nationality}</p>
    </div>
);

export default PlayerCard;