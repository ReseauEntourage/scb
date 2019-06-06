import React, { Component } from 'react'

import './Menu.scss'

export default class ListMenu extends Component {
    
    constructor(props) {
        super(props)

        this.elementItems = []
        this.elementOrderItems = []
        this.elementOrderItemsCopy = []
        this.elementTitleItems = []
        this.elementTitleItemsCopy = []

        this.final = []

        this.maMap = new Map()

        this.state = {
            newMap: new Map()
        }
    }
    componentDidMount() {
        const { data, nb } = this.props

        this.setState({
                // newMap: this.initList( data, nb )
                newMap: this.getArrayofLink(data)
            }
        )
    }

    dynamicSort = (property) => {
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    fieldSorter = (fields) => (a, b) => fields.map(o => {
        let dir = 1;
        if (o[0] === '-') { dir = -1; o=o.substring(1); }
        return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
    }).reduce((p, n) => p ? p : n, 0)


    getArrayofLink = (data) => {
        
        let newArray = []
        data.parcours.map( ( parcour, key) => {
            newArray = parcour.textes.concat(parcour.quotes).concat(parcour.videos)
        })
    
        const arr = [...newArray].sort(this.fieldSorter(['-chapitre', 'ordre']));

        console.log(arr)
        
        return arr
    
    }
    // initList(data, nb) {
    //     for(let i = 3; i < nb; i++) {
    //         this.elementItems.push(i)
    //     }
    //     for(const parcour of data.parcours) {
    //         if(parcour.textes.length !== 0) {
    //             for(const text of parcour.textes) {
    //                 this.elementOrderItems.push(text.ordre)
    //             }
    //         }
    //         if(parcour.videos.length !== 0) {
    //             for(const video of parcour.videos) {
    //                 this.elementOrderItems.push(video.ordre)
    //             }
    //         }
    //         if(parcour.quotes.length !== 0) {
    //             for(const quote of parcour.quotes) {
    //                 this.elementOrderItems.push(quote.ordre)
    //             }
    //         }
    //         for(const element of this.elementOrderItems) {
    //             if(parcour.textes.length !== 0) {
    //                 for(const text of parcour.textes) {
    //                     if(text.ordre === element) {
    //                         this.elementTitleItems.push(text.titre) 
    //                     }
    //                 }
    //             }

    //             if(parcour.videos.length !== 0) {
    //                 for(const video of parcour.videos) {
    //                     if(video.ordre === element) {
    //                         this.elementTitleItems.push(video.Titre)
    //                     }
    //                 }
    //             }

    //             if(parcour.quotes.length !== 0) {
    //                 for(const quote of parcour.quotes) {
    //                     if(quote.ordre === element) {
    //                         this.elementTitleItems.push(quote.titre)
    //                     }
    //                 }
    //             }
    //         }          
            
    //         for (let i=0; i < this.elementItems.length; i++) {
    //             this.maMap.set(this.elementOrderItems[i], this.elementTitleItems[i])
    //             this.state.newMap = new Map([...this.maMap].sort())
    //         }

    //         return this.state.newMap
    //     }
        
    // }
    
    render() {
        const arr = Array.from(this.state.newMap)
        // arr.map( ( valeur, key) => {
        //    console.log(valeur)
        // }) 
        return (
            <div className="Salut">
                <ul>
                {
                   arr.map( ( valeur, key) => (
                        <li key={key}> 
                            <a href={`/parcours/les-femmes-dans-la-rue/${valeur[0]}`}>
                            <span className="number"> { valeur.ordre }</span>
                            <span className="title"> { valeur.titre }</span>
                            </a>
                        </li>
                   )) 
                }
                </ul>
            </div>
        )
    
    }
}