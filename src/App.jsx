import { useState, useRef } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';
import './styles/app.scss';
import data from './data'



function App() {
  const audioRef =useRef(null)


 const[songs,setSongs]  = useState(data());
 const [currentSong, setCurrentSong] = useState(songs[0])
 const [isPlaying, setIsPlaying] = useState(false)
 const [songInfo, setSongInfo] = useState(
  {
      currentTime : 0,
      duration : 0,
      animationPercentage : 0,

  }
);
const[libraryStatus, setLibraryStatus] = useState(false)

 //function to update audio time
 const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;

 
  //function to round time from decimal to whole number 
  const roundedCurrent = Math.round(current);
  const roundedDuration =Math.round(duration)
  const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100)


  setSongInfo({currentTime : current, duration : duration, animationPercentage: animationPercentage});
}
//FUNCTION TO UPDATE THE ACTIVE STATUS OF SONGS
const activeSongHandler = (nexPrev) =>{
  const updatedSongs = songs.map(s =>  {
      return{
          ...s,
          active : s.id === nexPrev.id
      }
  })
  setSongs(updatedSongs)

}

const songEndHandler = async () =>{
  let currentIndex = songs.findIndex(song => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      if (isPlaying) audioRef.current.play();

}

   

  return (
  
      <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
        <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>

        <Song currentSong ={currentSong}/>

        <Player currentSong={currentSong} 
        isPlaying={isPlaying} 
        setIsPlaying ={setIsPlaying} 
        audioRef={audioRef} 
        timeUpdateHandler={timeUpdateHandler} 
        songInfo ={songInfo} 
        setSongInfo={setSongInfo}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        activeSongHandler={activeSongHandler}
       />

        <Library songs={songs} 
        setCurrentSong ={setCurrentSong} 
        audioRef={audioRef} 
        setSongs ={setSongs}
        libraryStatus={libraryStatus}
        isPlaying={isPlaying}
        activeSongHandler={activeSongHandler}
        />

        <audio onTimeUpdate={timeUpdateHandler}  
        onLoadedMetadata={timeUpdateHandler} 
        src={currentSong.audio} 
        ref={audioRef}
        onEnded={songEndHandler}></audio>

    </div>
  )
}

export default App
