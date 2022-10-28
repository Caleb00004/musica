import { motion } from "framer-motion"
import image from './album cover.svg'
import { useState } from "react"
import './musicPage.css'
import testImg from './Rectangle 26.png'
import playButton from './Play.svg'

export default function MusicPage() {

    return (
        <motion.div
            className="music-page"
            initial={false}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <button className="collection-btn">My collection</button>
            <button className="like-btn">Likes</button>

            <div className="musicPage-grid">
                <div className="music-container">
                    <img id='slide' className="album-img" src={testImg} width={'100%'}></img>
                    <div className="music-text">
                        <div>
                            <h4>Limits</h4>
                            <p>John Watts</p>
                            <p id='likes'>2.3m likes</p>
                        </div>
                        <img id='play-btn' width={'18%'}  src={playButton}></img> 
                    </div>
                </div>

                <div className="music-container">
                    <img id='slide' className="album-img" src={image} width={'100%'}></img>
                    <div className="music-text">
                        <div>
                            <h4>Limits</h4>
                            <p>John Watts</p>
                            <p id='likes'>2.3m likes</p>
                        </div>
                        <img id='play-btn' width={'18%'}  src={playButton}></img> 
                    </div>
                </div>

                <div className="music-container">
                    <img id='slide' className="album-img" src={image} width={'100%'}></img>
                    <div className="music-text">
                        <div>
                            <h4>Limits</h4>
                            <p>John Watts</p>
                            <p id='likes'>2.3m likes</p>
                        </div>
                        <img id='play-btn' width={'18%'}  src={playButton}></img> 
                    </div>
                </div>
                
                <div className="music-container">
                    <img id='slide' className="album-img" src={image} width={'100%'}></img>
                    <div className="music-text">
                        <div>
                            <h4>Limits</h4>
                            <p>John Watts</p>
                            <p id='likes'>2.3m likes</p>
                        </div>
                        <img id='play-btn' width={'18%'}  src={playButton}></img> 
                    </div>
                </div>
            </div>

        </motion.div>
    )
}