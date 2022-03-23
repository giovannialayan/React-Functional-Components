const HelloUser = (props) => {
    const [username, setUsername] = React.useState(props.username);

    return (
        <div>
            <p>hello {username}</p>
            <label>change name: </label>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
    );
};

const init = () => {
    ReactDOM.render(<HelloUser username='name'/>, document.getElementById('app'));
};

window.onload = init;