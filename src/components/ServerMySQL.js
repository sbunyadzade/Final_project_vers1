function ServerMySQL() {
    const handleButton = () => {
        fetch('http://localhost:3000/category')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
    };
        return(
        <div>
            <p>MySQL</p>
            <button onClick={handleButton} >Get coin</button>
        </div>
    )
};

export default ServerMySQL;