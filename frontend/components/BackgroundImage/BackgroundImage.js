import React, { Component } from 'react';

import './BackgroundImage.scss'

export default class BackgroundImage extends Component {
    render() {
        const { img } = this.props

        return (
            <div className="background-container">
                <img className="background-image" src={`http://localhost:1337${img}`} alt=""/>
            </div>
        )
    }  
}