import React, { Component } from 'react';

class Tags extends Component {
    render() {
        return(
            <div className='tagContainer'>
                {this.props.tags.map((tag, index) => 
                    <div className='tag'>#{tag}</div>
                )}
            </div>
        )
    }
}

export default Tags