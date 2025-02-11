
const LibrarySongs = ({songs, song, setCurrentSong,audioRef, setSongs,isPlaying,}) => {

    //EVENT HANDLERS
    const songSelectHandler = async (song) => {
        await setCurrentSong(song);

        // Play the selected song
        if (isPlaying) {
        audioRef.current.play();
    }

    }



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