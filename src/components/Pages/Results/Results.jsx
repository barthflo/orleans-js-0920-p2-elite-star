import './Results.css';

const Results =({location}) =>{
        return (
            <main className="Results d-flex justify-content-center align-items-center container">
                <h1>Results Page</h1>
                <p>{location.search}</p>
            </main>
        )
    }

export default Results;