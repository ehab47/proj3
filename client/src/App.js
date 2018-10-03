import React, { Component } from 'react';
import './App.css';
import LogoImg from './components/jumbotron';
import Searchbar from './components/searchbar';
import Suggestions from './components/suggestions';




class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoImg/>
        <Searchbar/>
        {/* <Suggestions/> */}
      </div>
    );
  }
}

export default App;


