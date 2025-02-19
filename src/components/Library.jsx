import LibrarySongs from './LibrarySongs';
import { playSong } from "../util";


const Library  = ({songs, setCurrentSong, audioRef, libraryStatus, isPlaying, songSelectHandler}) => {

  

    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="song-info">
                {songs.map (song => <LibrarySongs song={song} 
                setCurrentSong={setCurrentSong} 
                audioRef={audioRef} 
                id={song.id}
                isPlaying={isPlaying}
                songSelectHandler={songSelectHandler}/>)}

            </div>
        </div>
    )
}

export default Library;