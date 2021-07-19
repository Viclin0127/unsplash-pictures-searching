import React from "react";

class SearchBar extends React.Component{

    state = {term: ""};

    // Use arrow function can automaticlly bind "this" as SearchBar
    onFormSubmit = (e) => {
        e.preventDefault(); 
        
        // call parent function
        this.props.onUserSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form"> 
                    <div className="field">
                        <label>Image Search <span style={{color: "grey"}}> (this app is limited to 50 requests per hour...)</span></label>
                        <input 
                            type="text"
                            placeholder="type what you want to search and press ENTER"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;