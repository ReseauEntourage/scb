import React, { Component } from 'react'
import {TweenMax, Power2, TimelineLite, Power1} from "gsap"

import ListMenu from './ListMenu'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { GET_MENU_INFO } from './../../graphql/querries'


import menu from './../../static/images/ios-menu.svg'
import scb from './../../static/images/scb.png'
import close from './../../static/images/close.svg'
import arrow from './../../static/images/arrow.svg'
import arrow_white from './../../static/images/arrow-white.svg'



import './Menu.scss'

export default class Menu extends Component {
    
    constructor(props) {
        super(props)
        this.nb_slide = 0
    }

    handleClickClose() {
        const container = document.querySelector('.menu__sidebar-container--sidebar')
        const background = document.querySelector('.menu__sidebar-container--background')
        const sidebar = document.querySelector('.menu__sidebar-container')

        const tl = new TimelineLite()

        tl
            .to(background, .3, { autoAlpha: 0, ease: Power0.easeInOut })
            .to(container, .3, { x: '0vw', ease: Power0.easeInOut }, '-= .2')
            .to(sidebar, .1 ,{ autoAlpha: 1 })
            .to(background, .01, { x: '0vw', ease: Power0.easeInOut }, '+=.1')
    }

    handleClickOpen() {
        const container = document.querySelector('.menu__sidebar-container--sidebar')
        const background = document.querySelector('.menu__sidebar-container--background')
        const sidebar = document.querySelector('.menu__sidebar-container')

        const tl = new TimelineLite()
        tl
            .to(sidebar, .1 ,{ autoAlpha: 1 })
            .to(background, .01, { x: '100vw', ease: Power0.easeInOut })
            .to(container, .3, { x: '100vw', ease: Power0.easeInOut })
            .to(background, .3, { autoAlpha: 1, ease: Power0.easeInOut }, '-= .3')
    }

    render() {
        const { slug } = this.props
        return (
            <Query query={ GET_MENU_INFO } variables={ { slug } }>
                {({ loading, error, data }) => {

                    data.parcours.map( (parcour, key) => {
                        this.nb_slide = parcour.textes.length + parcour.videos.length + parcour.quotes.length
                        this.nb_slide += 3
                    })

                    return ( 
                        <div className="menu-container">
                            <div className="menu__burger-icon" onClick={ this.handleClickOpen } >
                                <img src={menu} alt="menu icon"/>
                            </div>
                            <div className="menu__scb-logo">
                                <img src={scb} alt="scb logo"/>
                            </div>
                            <div className="menu__slides-progress">
                                <div className="menu__progress-container">
                                    <span className="menu__progress-indicator"> 1 / {this.nb_slide} </span>
                                </div>
                            </div>
                            <div className="menu__sidebar-container">
                                <div className="menu__sidebar-container--sidebar">
                                    <div className="menu__sidebar__top-container">
                                        <div className="menu__sidebar__logo-container">
                                            <img src={scb} alt="" className="menu__sidebar-logo"/>
                                        </div>
                                        <div className="menu__sidebar-close-container" onClick={ this.handleClickClose }>
                                            <img src={close} alt="" className="menu__sidebar-close"/>
                                        </div>
                                    </div>
                                    <div className="menu__sidebar__list-container">
                                        <ul className="menu__sidebar__list-container--ul">
                                            <li className="menu__sidebar__list-item">
                                                <span className="item-title">
                                                    Les parcours
                                                </span>
                                                <img src={arrow} alt="arrow" className="arrow"/>
                                            </li>
                                            <li className="menu__sidebar__list-item">
                                                <span className="item-title">
                                                    Aller plus loins
                                                </span>
                                                <img src={arrow} alt="arrow" className="arrow"/>
                                            </li>
                                            <li className="menu__sidebar__list-item">
                                                <span className="item-title">
                                                    A propos
                                                </span>
                                                <img src={arrow} alt="arrow" className="arrow"/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menu__sidebar__entourage-container">
                                        <span className="entourage-title">
                                            Le réseau entourage
                                        </span>
                                        <img src={arrow_white} alt="arrow" className="arrow"/>
                                    </div>
                                    
                                </div>
                                <div className="menu_sidebarleft_menu-container">
                                    <ListMenu data={data} nb={this.nb_slide}></ListMenu>
                                </div>
                                <div className="menu__sidebar-container--background"></div>
                            </div>
                            
                        </div>
                    )
                }}
            </Query>
            
        )
    }
}

