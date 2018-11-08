import React, { Component } from 'react';
import Title from './Sentence';
import axios from 'axios';

class TitleGenPage extends Component {
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
        const data = await axios.get(`genTitle/${query}`)
        console.log(data)
        this.setState({
            tags: data.data
        }, () => console.log(data))
    }
    render() {
        return(    
            <div>            
                <h1>New Title Generator<span className='beta'> Beta</span></h1>
                <br></br>
                <h2>Find your story</h2>
                <p className ='subtitle'>TitleUP's Machine studdied the gramatical patterns of thousands of articles to generate new titles that have yet to be written
                <br/> Enter a <strong>genre</strong> bellow and we'll genereate a brand new article title for you to write!</p>
                <div className = "search">
                <input placeholder = 'Enter a Genre here!'
                    onChange = {this.updateTitle}
                    className='input'
                    list= "genres">
                </input>
                <datalist id="genres">
                    <option value="Design"/>
                    <option value="Productivity"/>
                    <option value="Education"/>
                    <option value="Psychology"/>
                    <option value="Programming"/>
                    <option value="JavaScript"/>
                    <option value="Tech"/>
                    <option value="Work"/>
                    <option value="Inspiration"/>
                    <option value="Google"/>
                    <option value="Internet"/>
                    <option value="Life Lessons"/>
                    <option value="Self Improvement"/>
                    <option value="Entrepreneurship"/>
                    <option value="Startup"/>
                    <option value="Life"/>
                    <option value="Culture"/>
                    <option value="Creativity"/>
                    <option value="Art"/>
                    <option value="Travel"/>
                    <option value="Technology"/>
                    <option value="Humor"/>
                    <option value="Feminism"/>
                    <option value="Politics"/>
                    <option value="Blockchain"/>
                    <option value="UI"/>
                    <option value="Medium"/>
                    <option value="Happiness"/>
                    <option value="Bitcoin"/>
                    <option value="Design Thinking"/>
                    <option value="Mobile"/>
                    <option value="User Experience"/>
                    <option value="Motivation"/>
                    <option value="Personal Development"/>
                    <option value="Health"/>
                    <option value="Cryptocurrency"/>
                    <option value="UX"/>
                    <option value="Artificial Intelligence"/>
                    <option value="Success"/>
                    <option value="Relationships"/>
                    <option value="Love"/>
                    <option value="Writing"/>
                    <option value="Business"/>
                    <option value="Philosophy"/>
                    <option value="Personal Growth"/>
                    <option value="Donald Trump"/>
                    <option value="BlackLivesMatter"/>
                    <option value="Economics"/>
                    <option value="Careers"/>
                    <option value="Machine Learning"/>
                    <option value="Learning"/>
                    <option value="Books"/>
                    <option value="Leadership"/>
                    <option value="Coding"/>
                    <option value="News"/>
                    <option value="CSS"/>
                    <option value="Music"/>
                    <option value="Web Development"/>
                    <option value="Social Media"/>
                    <option value="React"/>
                    <option value="Apple"/>
                    <option value="Satire"/>
                    <option value="Dating"/>
                    <option value="Software Development"/>
                    <option value="Ethereum"/>
                    <option value="Facebook"/>
                    <option value="Media"/>
                    <option value="Web Design"/>
                    <option value="Women"/>
                    <option value="Product Design"/>
                    <option value="Product Management"/>
                    <option value="Big Stories Matter"/>
                    <option value="Marketing"/>
                    <option value="UX Design"/>
                    <option value="This Happened To Me"/>
                    <option value="Design"/>
                    <option value="Productivity"/>
                    <option value="Education"/>
                    <option value="Tech"/>
                    <option value="JavaScript"/>
                    <option value="Google"/>
                    <option value="Life Lessons"/>
                    <option value="Programming"/>
                    <option value="Startup"/>
                    <option value="Entrepreneurship"/>
                    <option value="Creativity"/>
                    <option value="Psychology"/>
                    <option value="Inspiration"/>
                    <option value="Work"/>
                    <option value="Internet"/>
                    <option value="Culture"/>
                    <option value="Mobile"/>
                    <option value="Medium"/>
                    <option value="Motivation"/>
                    <option value="Self Improvement"/>
                    <option value="Design Thinking"/>
                    <option value="Life"/>
                    <option value="Personal Development"/>
                    <option value="Feminism"/>
                    <option value="Success"/>
                    <option value="Art"/>
                    <option value="Relationships"/>
                    <option value="Learning"/>
                    <option value="Blockchain"/>
                    <option value="Writing"/>
                    <option value="UI"/>
                    <option value="Books"/>
                    <option value="Happiness"/>
                    <option value="Technology"/>
                    <option value="Travel"/>
                    <option value="User Experience"/>
                    <option value="Health"/>
                    <option value="Humor"/>
                    <option value="Politics"/>
                    <option value="React"/>
                    <option value="Bitcoin"/>
                    <option value="Artificial Intelligence"/>
                    <option value="Cryptocurrency"/>
                    <option value="Philosophy"/>
                    <option value="UX"/>
                    <option value="BlackLivesMatter"/>
                    <option value="Business"/>
                    <option value="Love"/>
                    <option value="Coding"/>
                    <option value="News"/>
                    <option value="Music"/>
                    <option value="Dating"/>
                    <option value="Social Media"/>
                    <option value="Personal Growth"/>
                    <option value="Donald Trump"/>
                    <option value="Economics"/>
                    <option value="Careers"/>
                    <option value="Machine Learning"/>
                    <option value="Leadership"/>
                    <option value="Software Development"/>
                    <option value="CSS"/>
                    <option value="Web Development"/>
                    <option value="Apple"/>
                    <option value="Satire"/>
                    <option value="Web Design"/>
                    <option value="Ethereum"/>
                    <option value="Women"/>
                    <option value="Product Management"/>
                    <option value="Facebook"/>
                    <option value="Marketing"/>
                    <option value="Media"/>
                    <option value="Product Design"/>
                    <option value="Big Stories Matter"/>
                    <option value="UX Design"/>
                    <option value="This Happened To Me"/>
                </datalist>
                <button onClick = {this.getTags} >TitleUP!</button>
                </div>
                <Title tags = {this.state.tags}/>
            </div>
        )
    }
}

export default TitleGenPage