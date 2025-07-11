import React from "react";

const MatchCard = ({match})=>(
    <div className='match-card'>
        <h3>vs {match.opponent}</h3>
        <p>Date:{match.date}</p>
        <p>Venue:{match.venue}</p>

    </div>
)
export  default MatchCard;