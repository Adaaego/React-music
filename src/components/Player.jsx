import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = () => {
    return(
        <div className="player">
          
                <div className="time-control">
                <p>start time</p>
                <input type="range"></input>
                <p>end time</p>
                </div>
                
                <div className="play-control">
                <FontAwesomeIcon className="play" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" icon={faPlay}/>
                <FontAwesomeIcon className="play" icon={faAngleRight}/>

                </div>
           
        </div>
    )
}

export default Player;