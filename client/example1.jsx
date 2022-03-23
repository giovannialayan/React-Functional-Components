const HelloWorld = () => {
    return (
        <div>
            hello world
        </div>
    );
};

const init = () => {
    ReactDOM.render(<HelloWorld/>, getElementById('app'));
};

window.onload = init;