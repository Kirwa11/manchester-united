import React from "react";
import { fixtures } from "../data/fixtures";


const Fixtures = () => (
    <div className="fixtures-page">
        <h2>Upcoming Fixtures</h2>
        <div className="fixtures-table-container">
            <table className="fixtures-table">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Opponent</th>
                    <th>Venue</th>
                    <th>Stadium</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {fixtures.map(match => (
                    <tr key={match.id}>
                        <td>{match.date}</td>
                        <td>
                            <span className="opponent">{match.opponent}</span>
                        </td>
                        <td>{match.venue}</td>
                        <td>{match.stadium}</td>
                        <td>{match.time}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default Fixtures;