import React from 'react';
import SelectionCard from './SelectionCard';
import './WeekSelection.css';

class WeekSelection extends React.Component{
    state={
        Characters: []
    }

    getCharacters = () => {
        fetch("https://akabab.github.io/starwars-api/api/all.json")
            .then(res => res.json())
            .then(res => this.setState({ Characters: res }))
    }

    componentDidMount(){
        this.getCharacters()
    }

    render(){
        return(
            <div className="weekSelection">
                <h2>Week's Selection special eyes & hair</h2>
                <div className="selected">
                {this.state.Characters.slice(10,11).map(character =><SelectionCard {...character} />)}
                {this.state.Characters.slice(78,79).map(character =><SelectionCard {...character} />)}
                {this.state.Characters.slice(63,64).map(character =><SelectionCard {...character} />)}
                </div>
                
            </div>
        )
    }
}

export default WeekSelection;

