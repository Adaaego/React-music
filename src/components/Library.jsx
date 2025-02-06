import LibrarySongs from './LibrarySongs';


const Library  = ({songs, setCurrentSong, audioRef, libraryStatus}) => {

    const songSelectHandler = async (song) => {
        await setCurrentSong(song);
        audioRef.current.play()

    }


    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`} onClick={songSelectHandler}>
            <h2>Library</h2>
            <div className="song-info">
                {songs.map (song => <LibrarySongs song={song} setCurrentSong={setCurrentSong} audioRef={audioRef} id={song.id}/>)}

            </div>
        </div>
    )
}

export default Library;