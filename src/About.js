import React, { Component } from 'react';
import headshot from './headshot.jpg';

class AboutUs extends Component {
    render() {
        return(
            <div>
                <h1>About TitleUP</h1>
                <div className="aboutText">
                <h2 className = "about1"> TitleUP was made with the creative person in mind. </h2>
                <h2 className='about2'> Here at TitleUp, we value the power of data and it's ability to help bring about the future.</h2>
                <h2>We're here to help you, the creator, reach your full potential.</h2>
                <h2>Explore. Learn. Create. TitleUp Today.
                </h2>
                </div>
                <img className = 'headshot' src={headshot} alt='Founder, Hunter A Weinsheink'></img>
                <h4>TitleUP Founder and CEO, 
                Hunter Weinsheink</h4>
            </div>
        )
    }
}

export default AboutUs