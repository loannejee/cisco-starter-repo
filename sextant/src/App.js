import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import PublicIP from "./PublicIP";
import PylonConnector from "./PylonConnector";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Banner />

        <div className="Exhibit_Container">
          
          <Exhibit name="Public IPv4 Address">
            <PublicIP apiUrl="https://api.ipify.org?format=json" />
          </Exhibit>
          
          <Exhibit name="Public IPv6 Address">
            <PublicIP apiUrl="https://api64.ipify.org?format=json" />
          </Exhibit>
          
          <Exhibit name="Pylon Packet Latency" >
            <PylonConnector />
          </Exhibit>
        
        </div>
      </div>
    );
  }
}

export default App;
