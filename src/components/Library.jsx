import LibrarySongs from './LibrarySongs';
import { playSong } from "../util";


const Library  = ({songs, setCurrentSong, audioRef, libraryStatus, isPlaying, activeSongHandler}) => {

  

    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="song-info">
                {songs.map (song => <LibrarySongs song={song} 
                setCurrentSong={setCurrentSong} 
                audioRef={audioRef} 
                id={song.id}
                isPlaying={isPlaying}
                activeSongHandler={activeSongHandler}
                />)}

            </div>
        </div>
    )
}

export default Library;