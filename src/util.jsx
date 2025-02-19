export const playSong = (isPlaying, audioRef) => {
    if (isPlaying) {
        audioRef.current.play().catch((error) => console.log(error));
    }
}

