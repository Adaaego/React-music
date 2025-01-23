import React from "react";

const Player = () => {
    return(
        <div className="player">
            <h1>Player</h1>
            <div>
                <p>start time</p>
                <input type="range"></input>
                <p>end time</p>
                <div className="play-control"></div>
            </div>
        </div>
    )
}

export default Player;