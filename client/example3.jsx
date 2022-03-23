const {useState, useEffect} = React;

const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);

    useEffect(async () => {
        const response = await fetch('/getSongs');
        const songs = await response.json();
        setSongs(songs);
    }, []);

    if(props.song.length === 0) {
        return (
            <div>
                <h3>no songs</h3>
            </div>
        );
    }

    const songList = props.songs.map((song) => {
        return (
            <div key={song.title}>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    return (
        <div>
            <h1>my favorite songs</h1>
            {songList}
        </div>
    );
};

const loadSongsFromServer = () => {
    const response = await fetch('/getsongs');
    const songs = await response.json();
    RaectDOM.render(<SongContainer songs={songs}/>, document.getElementById('apps'));
};

const init = () => {
    RaectDOM.render(<SongContainer songs={[]}/>, document.getElementById('apps'));
    loadSongsFromServer();
};

window.onload = init;