import React from 'react';
import './Models.css';
import ModelCard from './ModelCard';

class Models extends React.Component {
    state = {
        Characters: []
    }

    getCharacters = () => {
        fetch("https://akabab.github.io/starwars-api/api/all.json")
            .then(res => res.json())
            .then(res => this.setState({ Characters: res }))
    }

    componentDidMount() {
        this.getCharacters()
    }

    render() {
        return (
            <div className="model" >
                {this.state.Characters.map(character =><ModelCard {...character} />)}
            </div>

        )
    }
}

export default Models;