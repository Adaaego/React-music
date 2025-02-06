import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic} from '@fortawesome/free-solid-svg-icons';


const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <div className="nav">
            <h2>Music</h2>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                <p>Library</p>
                <FontAwesomeIcon icon ={faMusic} />
            </button>
        </div>
    )
};


export default Nav;