import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <div className="Exhibit_Container">
          <Exhibit name="User's Public IP" />
          <Exhibit name="Latency Information for Pylon" />
          <Exhibit name="Exhibit 3" />
        </div>

      </div>
    );
  }

}

export default App;
