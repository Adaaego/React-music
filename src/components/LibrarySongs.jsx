import { playSong } from "../util";

const LibrarySongs = ({songs, song, setCurrentSong,audioRef, setSongs,isPlaying, activeSongHandler}) => {

     //EVENT HANDLERS
     const songSelectHandler = async (song) => {
        await setCurrentSong(song);
        activeSongHandler(song)
        if (isPlaying) {
            audioRef.current.play().catch((error) => console.log(error));
        }
    };
    



    return(
    <div className={`library-songs ${song.active ? 'selected': ''}`} onClick={() => songSelectHandler(song)}>
       <img src={song.cover} alt ={song.name}></img>
       <div className='song-description'>
         <h3>{song.name}</h3>
         <h4>{song.artist}</h4>
        </div>

    </div>
    )
}

export default LibrarySongs;