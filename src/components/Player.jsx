import {useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo}) => {

    

    //event handlers
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();  
        }
        setIsPlaying(!isPlaying)
        
    }

    const dragHandler = (e) => {
        setSongInfo ({...songInfo, currentTime : e.target.value})

    }

     // function to update time
     const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        );
    };
;
    
    return(
        <div className="player">
          
                <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" onChange={dragHandler}  min ={0} max={songInfo.duration} value={songInfo.currentTime}></input>
                <p>{getTime(songInfo.duration)}</p>
                </div>
                
                <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x"  icon={faAngleLeft} />
                <FontAwesomeIcon className="play" size="2x"  icon={isPlaying ? faPause : faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className="skip-forward" size="2x"  icon={faAngleRight}/>

                </div>
        </div>
    )
}

export default Player;