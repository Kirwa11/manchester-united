// src/pages/Team.js
import React from "react";
import { players } from "../data/players";
import PlayerCard from "../components/PlayerCard";

const groupByPosition = (position) =>
    players.filter((player) =>
        player.position.toLowerCase().includes(position)
    );

const Team = () => (
    <div className="team-page">
        <h2>Manchester United Squad 2025</h2>

        <section>
            <h3>Goalkeepers</h3>
            <div className="players-grid">
                {groupByPosition("goalkeeper").map((player) => (
                    <PlayerCard key={player.number} player={player} />
                ))}
            </div>
        </section>

        <section>
            <h3>Defenders</h3>
            <div className="players-grid">
                {groupByPosition("defender").map((player) => (
                    <PlayerCard key={player.number} player={player} />
                ))}
            </div>
        </section>

        <section>
            <h3>Midfielders</h3>
            <div className="players-grid">
                {groupByPosition("midfielder").map((player) => (
                    <PlayerCard key={player.number} player={player} />
                ))}
            </div>
        </section>

        <section>
            <h3>Forwards</h3>
            <div className="players-grid">
                {groupByPosition("forward").map((player) => (
                    <PlayerCard key={player.number} player={player} />
                ))}
            </div>
        </section>
    </div>
);

export default Team;