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
      duration : 0
  }
);
const[libraryStatus, setLibraryStatus] = useState(false)

 //function to update audio time
 const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;

  setSongInfo({
      ...songInfo, currentTime : current, duration
  })
}


    //EVENT HANDLERS
    const songSelectHandler = async (song) => {
      await setCurrentSong(song);
      // play audio
      playSong(isPlaying, audioRef)
  };

  return (
  
      <div className='App'>
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
        songSelectHandler={songSelectHandler}/>

        <Library songs={songs} 
        setCurrentSong ={setCurrentSong} 
        audioRef={audioRef} 
        setSongs ={setSongs}
        libraryStatus={libraryStatus}
        isPlaying={isPlaying}
        songSelectHandler ={songSelectHandler}/>

        <audio onTimeUpdate={timeUpdateHandler}  onLoadedMetadata={timeUpdateHandler} src={currentSong.audio} ref={audioRef}></audio>

    </div>
  )
}

export default App
