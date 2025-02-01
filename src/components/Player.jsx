import React,  {useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const audioRef =useRef(null)

    //event handlers
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();  
        }
        setIsPlaying(!isPlaying)
        
    }

    
    return(
        <div className="player">
          
                <div className="time-control">
                <p>start time</p>
                <input type="range"></input>
                <p>end time</p>
                </div>
                
                <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} />
                <FontAwesomeIcon className="play" icon={faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight}/>

                </div>
           <audio src={currentSong.audio} ref={audioRef}></audio>
        </div>
    )
}

export default Player;