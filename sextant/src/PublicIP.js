import React, { Component } from 'react';

class PublicIP extends Component {
    constructor() {
        super();
        this.state = {
            ip: ''
        };
    }

    componentDidMount() {
        fetch('https://api64.ipify.org?format=json')
            .then((response) => response.json())
            // .then((data) => console.log(data));
            .then((data) => this.setState({ ...this.state, ip: data.ip }));
    }

    render() {
        return (
            <div className="PublicIP">
                {this.state.ip}
            </div>
        );
    }

}

export default PublicIP;