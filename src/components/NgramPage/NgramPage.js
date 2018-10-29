import React, { Component } from 'react';
import Ngrams from './Ngrams';
import axios from 'axios';

class NgramPage extends Component {
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
    getTags = async(e) => {
        let query = this.state.searchTerm
        const data = await axios.get(`http://localhost:8080/ngrams/${query}`)
        console.log(data)
        this.setState({
            tags: data.data
        }, () => console.log(data))
    }
    render() {
        return(    
            <div>            
                <h1>Key Terms and Phrases</h1>
                <br></br>
                <h2>What should you write next?</h2>
                <h2>Here at TitleUP, we know what works. Tell us a Genre and we'll tell you it's top words or phrases for inspiration</h2> 
                <div className = "search">
                <input placeholder = 'Enter a Genre here!'
                    onChange = {this.updateTitle}
                    className='input'>
                </input>
                <button onClick = {this.getTags} >TitleUP!</button>
                </div>
                <Ngrams tags = {this.state.tags}/>
            </div>
        )
    }
}

export default NgramPage