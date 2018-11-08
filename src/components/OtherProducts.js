import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class OtherProjects extends Component {
    render() {
        return(
            <div className="buttonContainer">
                <Link to='/TagGenerator'>
                    <button className="productButton">Top Tag Generator
                    </button></Link>
                <Link to='/Ngrams'>
                    <button className="productButton">Key Terms and Phrases
                    </button></Link>
                <Link to='TitleGen'>
                    <button className="productButton">Title Generator 
                        <span className='beta'> (Beta)</span>
                    </button></Link>
            </div>
        )
    }
}

export default OtherProjects