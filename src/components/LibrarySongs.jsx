
const LibrarySongs = ({songs, song, setCurrentSong,audioRef, setSongs}) => {

    //EVENT HANDLERS
    const songSelectHandler = async (song) => {
        await setCurrentSong(song);
        audioRef.current.play()

    }

    //function to change the current songs active status 
    const selectedSong = songs.map(song => {
        if(song.id === id){
            return{
                ...song,
                active : true
            }
        }else{
            return{
                ...song,
                active :false
            }
        }
       
    }); 
    setSongs(selectedSong)


    return(
    <div className={`library-songs ${song.active ? 'selected': ''}`} onClick={songSelectHandler}>
       <img src ={song.cover} alt ={song.name}></img>

       <div className='song-description'>
         <h3>{song.name}</h3>
         <h4>{song.artist}</h4>
        </div>

    </div>
    )
}

export default LibrarySongs;