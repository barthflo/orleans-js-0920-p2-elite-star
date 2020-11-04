import React from 'react';
import SelectionCard from './SelectionCard';

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
            <div>
                <h2>Week's Selection special eyes & hair</h2>
                <div>
                {this.state.Characters.slice(5,6).map(character =><SelectionCard {...character} />)}
                {this.state.Characters.slice(50,51).map(character =><SelectionCard {...character} />)}
                {this.state.Characters.slice(63,64).map(character =><SelectionCard {...character} />)}
                </div>
            </div>
        )
    }
}

export default WeekSelection;

