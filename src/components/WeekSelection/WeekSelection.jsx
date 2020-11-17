import React from 'react';
import SelectionCard from './SelectionCard';
import './WeekSelection.css';
import {Slide} from 'react-reveal';

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
        return(
            <div className="weekSelection col-12 col-md-10 offset-md-1">
                <Slide bottom>
                <h2 className="w-100 text-capitalize">Week's selection special eyes & hair</h2>
                </Slide>
                <div className="selected">
                {this.state.characters.sort((a, b)=> 0.5 - Math.random()).slice(0,1).map(character =><SelectionCard {...character} key={character.name} />)}
                {this.state.characters.sort((a, b)=> 0.5 - Math.random()).slice(1,2).map(character =><SelectionCard {...character} key={character.name}/>)}
                </div>
                
            </div>
        )
    }
}

export default WeekSelection;

