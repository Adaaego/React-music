import {useRef, useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { playSong } from "../util";

const Player = ({
    currentSong, 
    isPlaying, 
    setIsPlaying, 
    audioRef, 
    songInfo, 
    setSongInfo, 
    setCurrentSong,
    songs,
    setSongs,
    }) => {

    

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
        audioRef.current.currentTime = e.target.value;
        setSongInfo ({...songInfo, currentTime : e.target.value})

    }

    const skipHandler = async (direction)=> {

        //find current index 
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);

        //skip forward
        if(direction === 'skip-forward'){
            await setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }else if(direction === 'skip-backward'){
            await setCurrentSong(currentIndex === 0 ? songs[songs.length -1] : songs[currentIndex -1]);
        }

            if (isPlaying) audioRef.current.play();


    }
    

     // function to update time
     const getTime = (time) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        );
    };


;
//useEffect

useEffect (() =>{
     //function to update the active status of the current song
     const updatedSongs = songs.map(s =>  {
        return{
            ...s,
            active : s.id === currentSong.id
        }
    })
    setSongs(updatedSongs)
}, [currentSong])

// Function to update the translateX transform based on animationPercentage
const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  };
    
    return(
        <div className="player">
          
                <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className='track' style={{background :`linear-gradient(to right,  ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
                <input
                type='range'
                min={0}
                max={songInfo.duration || 0}
                value={songInfo.currentTime}
                onChange={dragHandler} ></input>
                <div className='animate-track'  style={trackAnimation}></div> 

                </div>
 
                
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
                </div>
                
                <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x"  icon={faAngleLeft} onClick={() => skipHandler('skip-backward')} />
                <FontAwesomeIcon className="play" size="2x"  icon={isPlaying ? faPause : faPlay} onClick={playSongHandler}/>
                <FontAwesomeIcon className="skip-forward" size="2x"  icon={faAngleRight} onClick={() => skipHandler('skip-forward')}/>

                </div>
        </div>
    )
}

export default Player;


