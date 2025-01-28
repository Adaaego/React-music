import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './util'



function App() {

 const[song,setSong]  = useState(data());
 const [currentSong, setCurrentSong] = useState(song[0])
 

  return (
  
      <div className='App'>
        <Song currentSong ={currentSong}/>
        <Player />
    </div>
  )
}

export default App
