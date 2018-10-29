import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

class Demo extends React.Component {
    constructor (props) {
      super(props)
  
      this.state = {
        loading: true
      }
    }
  
    componentDidMount () {
      // fake promise
      setTimeout(() =>
        this.setState({ loading: false })
      , 500)
    }
  
    render () {
      const { loading } = this.state
  
      return (
        <LoadingScreen
        loading={loading}
        logoSrc='https://cdn-images-1.medium.com/max/1600/1*va6jnbV9wLSNdjJiUUJo2w.gif'
      >
      </LoadingScreen>
        )
    }
}

export default Demo