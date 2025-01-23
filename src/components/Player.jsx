import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return(
        <div className="player">
            <h1>Player</h1>
            <div>
                <p>start time</p>
                <input type="range"></input>
                <p>end time</p>
                <div className="play-control">
                <FontAwesomeIcon className="play" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" icon={faPlay}/>
                <FontAwesomeIcon className="play" icon={faAngleRight}/>

                </div>
            </div>
        </div>
    )
}

export default Player;