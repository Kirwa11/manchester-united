import React from "react";

const PlayerCard = ({ player }) => (
    <div className="player-card">
        <h3>{player.name}</h3>
        <p>Position: {player.position}</p>
        <p>Nationality: {player.nationality}</p>
        <div className="rating-container">
            <div className="rating-bar">
                <div
                    className="rating-fill"
                    style={{ width: `${(player.rating / 10) * 100}%` }}
                ></div>
            </div>
            <span className="rating-label">{player.rating}/10</span>
        </div>
    </div>
);

export default PlayerCard;