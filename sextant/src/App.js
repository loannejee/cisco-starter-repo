import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import PublicIP from './PublicIP';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <div className="Exhibit_Container">
          <Exhibit name="User's Public IP" >
            <PublicIP />
          </Exhibit>
          <Exhibit name="Latency Information for Pylon" />
          <Exhibit name="Exhibit 3" />
        </div>

      </div>
    );
  }

}

export default App;
