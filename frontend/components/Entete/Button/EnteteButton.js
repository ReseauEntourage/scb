import React from 'react'
import Link from 'next/link';

import './EnteteButton.scss'

const EnteteButton = ({ title, color, slug, chapitre }) => {
        console.log(chapitre)
        return (
            <div className="btn-entete__container">
            {
                chapitre === "Intro"
                ?
                <Link href={`/parcours/?id=${slug}/?chapitre=comprendre/?order=0`} as={`/parcours/${slug}/comprendre/0`}>
                    <a>
                        <div className="entete__button-container" >
                            <span className="entete__button-title" style={{ color: "#" + color }}>
                                { title }
                            </span>
                        </div>
                    </a>
                </Link>
                :
                <Link href={`/parcours/?id=${slug}/?chapitre=${chapitre}/?order=1`} as={`/parcours/${slug}/${chapitre}/1`}>
                    <a>
                        <div className="entete__button-container" >
                            <span className="entete__button-title" style={{ color: "#" + color }}>
                                { title }
                            </span>
                        </div>
                    </a>
                </Link>
            }
            </div>

            
        )
}  

export default EnteteButton