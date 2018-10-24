import React, { Component } from 'react';
import Tags from './Tags';
import axios from 'axios';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: "",
            tags: []
        }
    }
    updateTitle = (e) => {
        this.setState({searchTerm: e.target.value}) 
    }
    getTags = async() => {
        let query = this.state.searchTerm
        const data = await axios.get(`http://localhost:8080/search/${query}`)
        console.log(data)
        this.setState({
            tags: data.data
        }, () => console.log(data))
    }
    render() {
        return(
            <div>
                <nav>
                    <span>
                        <span>Title</span>
                        <img src = 'https://lh3.ggpht.com/N6pVC84qnooEsOCJ15dijaOIfiZwBi1t0z6IDwczm_xKO1E_y9NGaogv5jhjQDx3YRIF=s180' alt = 'up'>
                        </img>
                    </span>
                    <span>About Us</span>
                    <span>Categories</span>
                    <span>Donate</span>
                </nav>
                <div className = "logo">
                    <span>Title</span>
                    {/* <img src = 'https://lh3.ggpht.com/N6pVC84qnooEsOCJ15dijaOIfiZwBi1t0z6IDwczm_xKO1E_y9NGaogv5jhjQDx3YRIF=s180' alt = 'up'>
                    </img> */}
                </div>
                <div className = "search">
                    <input placeholder = 'level up your title today!'
                            onChange = {this.updateTitle}>
                    </input>
                    <button onClick = {this.getTags}>TitleUP!</button>
                </div>
                <Tags tags = {this.state.tags}/>
            </div>
        )
    }
}

export default Landing