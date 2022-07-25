import React, {Component} from 'react'
import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img
                    className='banner_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png'
                    alt=''
                />
                <h1 className="banner_title">Sextant Dashboard</h1>
            </div>
        )
    }
}

export default Banner