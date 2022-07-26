import React, { Component } from 'react';
const W3CWebSocket = require('websocket').w3cwebsocket;
const client = new W3CWebSocket('ws://localhost:55455', 'echo-protocol');



class Latency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: 'hi'
        };
    }

    componentDidMount() {
        

        client.onerror = function() {
            console.log('Connection Error');
        };

        client.onopen = function() {
            console.log('WebSocket Client Connected');
        
            function sendNumber() {
                if (client.readyState === client.OPEN) {
                    var number = Math.round(Math.random() * 0xFFFFFF);
                    client.send(number.toString());
                    setTimeout(sendNumber, 1000);
                }
            }
            sendNumber();
        };

        client.onclose = function() {
            console.log('echo-protocol Client Closed');
        };
        
        client.onmessage = function(e) {
            if (typeof e.data === 'string') {
                console.log("Received: '" + e.data + "'");
                this.setState({ ...this.state, latency: e.data })
            }
        };
    }

    render() {
        return (
            <div className="Latency">
                {this.state.latency}
            </div>
        );
    }

}

export default Latency;