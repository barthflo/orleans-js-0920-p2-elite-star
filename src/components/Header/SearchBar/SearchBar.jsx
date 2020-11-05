import { Component }  from 'react';
import './SearchBar.css';
import { RiSearch2Line } from 'react-icons/ri';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    searchData;
    state = {
        open : false,
        gender : "Choose a gender...",
        species : "Choose an origin..." ,
        height : "Choose a height...",
        side : "Pick a side",
    }
    componentDidMount(){
        this.searchData = JSON.parse(localStorage.getItem('search'));
        if(localStorage.getItem('search')){
            this.setState({
                gender: this.searchData.gender,
                species:this.searchData.species,
                height: this.searchData.height,
                side:this.searchData.side
            })
        }else{
            this.setState({
                gender:"Choose a gender",
                species : "Choose an origin..." ,
                height : "Choose a height...",
                side : "Pick a side",
            })
        }
    }
    componentDidUpdate(nextState){
        localStorage.setItem('search', JSON.stringify(nextState));
    }
    
    render(){
        const handleOpen = () => this.setState({open : true});
        const handleClose = () =>  this.setState({open : false});
        const handleChange = (e) => this.setState({[e.target.name]:e.target.value});
        const handleSubmit = () => this.props.history.push('/results');
        return (
            <div className="SearchBar-container mx-1">
                <div className="SearchBar d-flex flex-column align-items-center">
                    <div className="btn justify-content-between align-items-center d-flex 
                                    no-wrap mx-1 p-2 mt-md-1 py-md-1 px-md-3" 
                         type="button" 
                         onClick={handleOpen}
                    >
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

                        <form id="searchForm" 
                              onSubmit={handleSubmit} 
                              className="d-flex flex-wrap justify-content-center w-100 py-3 mb-2"
                        >
                            <label htmlFor="Species"/>
                            <div className="custom-select">
                                <select id="Species" name="species" 
                                    defaultValue={this.state.species} 
                                    onChange={handleChange}
                                >
                                    <option disabled >
                                        {this.state.species}
                                    </option>
                                    <option value="human">Human</option>
                                    <option value="droid">Droid</option>
                                    <option value="wookiee">Wookiee</option>
                                    <option value="others">Others...</option>
                                </select>
                            </div>
                            <label htmlFor="Gender" />
                            <div className="custom-select">
                                <select id="Gender" name="gender" 
                                    defaultValue={this.state.gender} 
                                    onChange={handleChange} 
                                >
                                    <option disabled>
                                        {this.state.gender}
                                    </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <label htmlFor="Height" />
                            <div className="custom-select">
                                <select id="Height" name="height" 
                                    defaultValue={this.state.height} 
                                    onChange={handleChange}
                                >
                                    <option disabled >
                                        {this.state.height}
                                    </option>
                                    <option value="1">Less than a meter</option>
                                    <option value="1.5">1-1.50 meters</option>
                                    <option value="2">1.50-2 meters</option>
                                    <option value="3">2-3 Meters</option>
                                    <option value="4">More than 3 meters</option>
                                </select>
                            </div>
                            <label htmlFor="Side" />
                            <div className="custom-select">
                                <select id="Side" name="side" 
                                    defaultValue={this.state.side} 
                                    onChange={handleChange} 
                                >
                                    <option value={this.state.side} 
                                        disabled 
                                    >
                                        {this.state.side}
                                    </option>
                                    <option value="Republic" key={0}>Republic</option>
                                    <option value="Empire" key={1}>Empire</option>
                                    <option value="All" key={2}>All</option>
                                </select>
                            </div>
                        </form>
                        <button className="btn btn-submit px-4" type="submit" form="searchForm">
                                Find your model!
                        </button>
                    </div>
                </div>
                <div className={this.state.open? "closing-container bg-none position-fixed w-100" : "hidden"} onClick={handleClose}></div>
            </div>
        );
    };
}


export default withRouter(SearchBar);