import React, { Component } from 'react';
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Donate from './components/Donate'
import TagPage from './components/TagPage/TagPage'
import NgramPage from './components/NgramPage/NgramPage'
import TitleGenPage from './components/TitlePage/TitleGenPage'
import About from './About'
const LoadingScreen = require('react-loading-screen');

class App extends Component {
  
  componentDidMount() {

  }
  render() {
    return (  
      <Router>
        <div className="App">
          <Loader/>
          <Navbar/>
          <Route path = "/" exact render={() =>
            <Landing/>}> 
            </Route>
          <Route path ="/about" exact render ={() => 
            <About/>}></Route>
          <Route path ="/TagGenerator" exact render ={() => 
            <TagPage/>}> 
            </Route>
          <Route path ="/Ngrams" exact render ={() => 
            <NgramPage/>}>
            </Route>
          <Route path ="/TitleGen" exact render ={() => 
            <TitleGenPage/>}>
            </Route>
          <Route path ="/donate" exact render ={() => 
            <Donate/>}> </Route>
          <div className = 'banner'>.</div>
        </div>
      </Router>
    );
  }
}

export default App;
