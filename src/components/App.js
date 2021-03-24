import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = {images: []};

    // call back when searchbar onSubmit event trigger 
    onSearchSubmit = async (term) => {
        // Here, we can use either Promise .then() or async await method
        const response = await unsplash.get("/search/photos", {
            params: { query: term}
        })

        this.setState({images: response.data.results});
    }
    // send props to child
    render(){
        return (
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar onUserSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;