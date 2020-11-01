import React  from 'react';
import './SearchBar.css';
import { RiSearch2Line } from 'react-icons/ri';
import {Redirect} from 'react-router-dom';

class SearchBar extends React.Component {
    state = {
        open : false,
        characters : [],
        gender : "Choose a gender...",
        species : "Choose an origin..." ,
        eyes : "Pick eyes' color...",
        side : "Pick a side",
    }
    componentDidMount(){
        fetch("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json")
             .then(res => res.json())
             .then(data => this.setState({characters : data}));
    }
    
    render(){
        const getUnique = (arr, index) => {
            const unique = arr
                .map(e => e[index])
                .map((e, i, final) => final.indexOf(e) === i && i)
                .filter(e => arr[e]).map(e => arr[e]);      
            return unique;
        }
        const handleOpen = () => this.setState({open : true});
        const handleClose = () =>  this.setState({open : false});
        const handleChange = (e) => this.setState({[e.target.name]:e.target.value});
        const handleSubmit = () => {
            return <Redirect to='/results'/>;
          }
        
        return (
            <div className="SearchBar-container mx-1">
                <div className="SearchBar d-flex flex-column align-items-center">
                    <div className="btn justify-content-between align-items-center d-flex no-wrap mx-1 p-2 mt-md-1 py-md-1 px-md-3" type="button" onClick={handleOpen}>
                        <div className="d-none d-md-inline-block">
                        Search ...
                        </div>
                        <RiSearch2Line className="search-icon"/>
                    </div>
                    <div 
                        className={this.state.open 
                        ?
                        "search-drop-down position-absolute d-flex flex-column align-items-center p-4"
                        : 
                        "hidden"}>

                        <form id="searchForm" onSubmit={handleSubmit} className="d-flex flex-wrap justify-content-center w-100 py-3 mb-2">
                            <label htmlFor="Species"/>
                            <div className="custom-select">
                                <select id="Species" name="species" defaultValue={this.state.species} required onChange={handleChange}>
                                    <option disabled hidden>{this.state.species}</option>
                                    {getUnique(this.state.characters, "species")
                                    .map((character, index) => 
                                    <option value={character.species} key={index}>
                                        {character.species.replace(/^\w/, (c) => c.toUpperCase())}
                                    </option>
                                    )}
                                </select>
                            </div>
                            <label htmlFor="Gender" />
                            <div className="custom-select">
                                <select id="Gender" name="gender" defaultValue={this.state.gender} onChange={handleChange} required>
                                    <option disabled hidden>{this.state.gender}</option>
                                    {getUnique(this.state.characters, "gender").map((character, index) => <option value={character.gender} key={index}>{character.gender.replace(/^\w/, (c) => c.toUpperCase())}</option>)}
                                </select>
                            </div>
                            <label htmlFor="EyeColor" />
                            <div className="custom-select">
                                <select id="EyeColor" name="eyes" defaultValue={this.state.eyes} required onChange={handleChange}>
                                    <option disabled hidden>{this.state.eyes}</option>
                                    {getUnique(this.state.characters, "eyeColor").map((character, index) => <option value={character.eyeColor} key={index}>{character.eyeColor}</option>)}
                                </select>
                            </div>
                            <label htmlFor="Side" />
                            <div className="custom-select">
                                <select id="Side" name="side" defaultValue={'DEFAULT'} onChange={handleChange} required>
                                    <option value="DEFAULT" disabled hidden>{this.state.side}</option>
                                    <option value="Republic" key={0}>Republic</option>
                                    <option value="Empire" key={1}>Empire</option>
                                    <option value="All" key={2}>All</option>
                                </select>
                            </div>
                        </form>
                        <button className="btn btn-submit px-4" type="submit" form="searchForm">Find your model!</button>
                    </div>
                </div>
                <div className={this.state.open? "closing-container bg-none position-fixed w-100" : "hidden"} onClick={handleClose}></div>
            </div>
        );
    };
}


export default SearchBar;