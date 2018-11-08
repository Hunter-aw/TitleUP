import React, { Component } from 'react';
import axios from 'axios';
import OtherProjects from './OtherProducts'
// import { BrowserRouter as Router, Link} from 'react-router-dom';


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
                <div className = "typeContainer">
                <h1 className = 'typewriter'>Welcome to TitleUP: An AI powered tool for content creators.</h1>
                </div>
                <div className = "typeContainer2">
                <h2 className ='typewriter2'>Browse our products below and level up your content today.</h2>
                </div>

                <OtherProjects/>
            </div>
        )
    }
}

export default Landing