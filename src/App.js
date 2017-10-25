import React, { Component } from 'react';
import logo from './logo.svg';
import Media from './components/Media';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Search media</h1>
          <p>Please enter search terms...</p>
        <Media />
      </div>
    );
  }
}

export default App;
