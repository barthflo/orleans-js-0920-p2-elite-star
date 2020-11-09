import React from 'react';
import SelectionCard from './SelectionCard';
import './WeekSelection.css';

class WeekSelection extends React.Component{
    state={
        characters: []
    }
    getCharacters = () => {
        fetch("https://akabab.github.io/starwars-api/api/all.json")
            .then(res => res.json())
            .then(data => data.filter(d => d.id !== 77))
            .then(res => this.setState({ characters: res }))
    }
    componentDidMount(){
        this.getCharacters();
    }
    
    render(){
        // const characters = JSON.parse(localStorage.getItem('characters'));
        console.log(this.state.characters);
        return(
            <div className="weekSelection col-12 col-md-10 offset-md-1">
                <h2 className="w-100">Week's Selection special eyes & hair</h2>
                <div className="selected">
                {this.state.characters.sort((a, b)=> 0.5 - Math.random()).slice(0,1).map(character =><SelectionCard {...character} />)}
                {this.state.characters.sort((a, b)=> 0.5 - Math.random()).slice(1,2).map(character =><SelectionCard {...character} />)}
                {/* {this.state.Characters.sort((a, b)=> 0.5 - Math.random()).slice(2,3).map(character =><SelectionCard {...character} />)} */}
                </div>
                
            </div>
        )
    }
}

export default WeekSelection;

