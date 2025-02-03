import LibrarySongs from './LibrarySongs';


const Library  = ({songs}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="song-info">
                {songs.map (song => <LibrarySongs song={song}/>)}

            </div>
        </div>
    )
}

export default Library;