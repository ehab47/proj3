import React, { Component } from 'react';
//import './App.css';
import './components/navbar.style.css';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Suggestions from './components/suggestions';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Searchbar/>
        {/* <Suggestions/> */}
      </div>
    );
  }
}

export default App;


