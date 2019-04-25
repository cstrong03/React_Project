import React, { Component } from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'



class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default App;
