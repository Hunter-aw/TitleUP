import React, { Component } from 'react';
import Tags from './Tags';
import axios from 'axios';

class TagPage extends Component {
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
        const data = await axios.get(`/search/${query}`)
        console.log(data)
        this.setState({
            tags: data.data
        }, () => console.log(data))
    }
    render() {
        return(    
            <div>            
                <h1>Top Tag Generator</h1>
                <br></br>
                <h2>It's all about #s today. Let us help you find the right tags for your content</h2>
                <p className ='subtitle'>Tell us your title below, and TitleUPs intelligent AI will determine the best tags for your article's optimal performance</p> 
                <div className = "search">
                <input placeholder = 'level up your title today!'
                    onChange = {this.updateTitle}
                    className='input'>
                </input>
                <button onClick = {this.getTags}>TitleUP!</button>
                </div>
                <Tags tags = {this.state.tags}/>
            </div>
        )
    }
}

export default TagPage