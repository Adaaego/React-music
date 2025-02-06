
const LibrarySongs = ({songs, song, setCurrentSong,audioRef, setSongs}) => {

    //EVENT HANDLERS
    const songSelectHandler = async (selectedSong) => {
        await setCurrentSong(selectedSong);
        
        //function to update the active status of the current song
        const updatedSongs = songs.map(s =>  {
            return{
                ...s,
                active : s.id === selectedSong.id
            }
        })
        setSongs(updatedSongs)

        // Play the selected song
        if (audioRef.current) {
        audioRef.current.play();
    }

    }



    return(
    <div className={`library-songs ${song.active ? 'selected': ''}`} onClick={() => songSelectHandler(song)}>
       <img src ={song.cover} alt ={song.name}></img>

       <div className='song-description'>
         <h3>{song.name}</h3>
         <h4>{song.artist}</h4>
        </div>

    </div>
    )
}

export default LibrarySongs;