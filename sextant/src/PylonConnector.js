import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');


class PylonConnector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }

    componentDidMount() {
        // Each message contains a data field with a timestamp of when the packet was sent. 
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
    }

    render() {
        return (
            <div className="PylonConnector">
                {this.state.latency}
            </div>
        );
    }

}

export default PylonConnector;