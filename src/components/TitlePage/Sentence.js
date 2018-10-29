import React, { Component } from 'react';

class Title extends Component {
    render() {
        return(
            <div className='tagContainer'>
                <div className='tag'>{this.props.tags}</div>
            </div>
        )
    }
}

export default Title