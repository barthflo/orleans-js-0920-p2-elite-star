import React  from 'react';
import './SearchBar.css';
import { RiSearch2Line } from 'react-icons/ri';

class SearchBar extends React.Component {
    state = {
        open : false,
        characters : [],
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
        console.log(getUnique(this.state.characters, 'species'));
        const handleOpen = (e) => {
            e.preventDefault();
            return this.setState({open : true});
        }
        const handleClose = () =>  this.setState({open : false});
        
        return (
            <div>
                <div className="SearchBar d-flex flex-column align-items-center">
                    <div className="btn d-flex no-wrap" type="button" onClick={handleOpen}>
                        <div >
                        Search ...
                        </div>
                        <RiSearch2Line />
                    </div>
                    <div 
                        className={this.state.open 
                        ?
                        "search-drop-down position-absolute d-flex flex-column align-items-center p-3"
                        : 
                        "hidden"}>
                        <form className="d-flex flex-wrap w-100 p-3">
                            <label htmlFor="Species"/>
                            <div className="custom-select">
                                <select id="Species">
                                    {getUnique(this.state.characters, "species")
                                    .map((character, index) => 
                                    <option value={index} key={index}>
                                        {character.species.replace(/^\w/, (c) => c.toUpperCase())}
                                    </option>
                                    )}
                                </select>
                            </div>
                            <label htmlFor="Gender" />
                            <div className="custom-select">
                                <select id="Gender">
                                    {getUnique(this.state.characters, "gender").map((character, index) => <option value={index} key={index}>{character.gender.replace(/^\w/, (c) => c.toUpperCase())}</option>)}
                                </select>
                            </div>
                            <label htmlFor="SkinColor" />
                            <div className="custom-select">
                                <select id="SkinColor">
                                    {getUnique(this.state.characters, "eyeColor").map((character, index) => <option value={index} key={index}>{character.eyeColor}</option>)}
                                </select>
                            </div>
                            <label htmlFor="Side"></label>
                        </form>
                    </div>
                </div>
                <div className={this.state.open? "closing-container bg-none position-absolute w-100" : "hidden"} onClick={handleClose}></div>
            </div>
        );
    };
}


export default SearchBar;