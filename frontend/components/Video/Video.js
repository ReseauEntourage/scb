import React from "react"
import Menu from './../Menu/Menu'
import YouTube from 'react-youtube';

import './Video.scss'
import Button from './../Button/Button'
const params = { 
        height: '200',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    }
}
let paragraphes = []

const subStringData = (text) => {
    
    const res = text.split("\n")
    return res   

}
const Video = ( { video, color, order, slug, items, chapitre } ) => {

    video.map( (vid) => {
        paragraphes = subStringData(vid.Texte)
    })
    return (
        <div className="container">
            <Menu slug={ slug }/>
            <div className="video-container">
            { 
                video.map( (vid, key) => (
                    <div className="video-content" key={key}>
                        <div className="video__video-subtitle">
                            <h2> Interview </h2>
                        </div>
                        <div className="video__video-name">
                            <h1> { vid.Titre } </h1>
                        </div>
                        <div className="video__video-text-container">
                            { 
                                paragraphes.map( (paragraphe, key) => (
                                    <p className="video__paragraphe" key={key}> { paragraphe } </p>
                                ) ) 
                            }
                        </div>
                        <YouTube
                            className="player"
                            videoId={ "AKrOePSXbQQ" }
                            opts={params}
                        />
                        {
                            items.pop().ordre !== order 
                            ?   
                                <Button 
                                    title={"continuer"} 
                                    link={ "/parcours/" } 
                                    order={order}
                                    color={color} 
                                    slug={slug}
                                    chapitre={chapitre}
                                    next={false}
                                />
                            :   
                                <Button 
                                    title={"continuer"} 
                                    link={ "/parcours/" } 
                                    order={order} 
                                    color={color} 
                                    slug={slug}
                                    chapitre={chapitre}
                                    next={true}
                                />
                        }
                    </div>
                ))
            }
            </div>
        </div>
    )
}
    
    
    

export default Video