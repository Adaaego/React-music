
const LibrarySongs = ({song, setCurrentSong,audioRef}) => {

    const songSelectHandler = async (song) => {
        await setCurrentSong(song);
        audioRef.current.play()

    }


    return(
    <div className="library-songs" onClick={songSelectHandler}>
       <img src ={song.cover} alt ={song.name}></img>

       <div className='song-description'>
         <h3>{song.name}</h3>
         <h4>{song.artist}</h4>
        </div>

    </div>
    )
}

export default LibrarySongs;