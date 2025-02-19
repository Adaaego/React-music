import {useRef, useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Player = ({
    currentSong, 
    isPlaying, 
    setIsPlaying, 
    audioRef, 
    songInfo, 
    setSongInfo, 
    setCurrentSong,
    songs,
    setSongs,}) => {

    

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

    const skipHandler = (direction)=> {

        //find current index 
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);

        //skip forward
        if(direction === 'skip-forward'){
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
            audioRef.current.play();
        }else if(direction === 'skip-backward'){
            setCurrentSong(currentIndex === 0 ? songs[songs.length -1] : songs[currentIndex -1])
        }

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
    
    return(
        <div className="player">
          
                <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" onChange={dragHandler} min ={0} max={songInfo.duration || 0} value={songInfo.currentTime}></input>
                <p>{getTime(songInfo.duration)}</p>
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