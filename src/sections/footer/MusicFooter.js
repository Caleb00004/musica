import './footer.css'
import previous from './icons/previous.svg'
import next from './icons/next.svg'
import shuffle from './icons/shuffle.svg'
import repeate from './icons/repeate-one.svg'
import songPlaying from '../music/album cover.svg'

export default function MusicFooter() {
    return (
        <div className='music-footer'>
            <div className='song-playing'>
                <img src={songPlaying} />
                <div className='song-playing-name'>
                    <p><b>Seasons in</b></p>
                    <p>James</p>
                </div>
            </div>

            <div className='song-playing-elements'>
                {/* Define the section for displaying track buttons */}

            
                {/* Define the section for displaying the seek slider */}
                <div class="slider_container">
                    <div class="buttons">
                        <div className='shuffle-track'>
                            <i class="fa-light fa-shuffle"></i>
                            <img src={shuffle} />
                        </div>
                        <div class="prev-track" onclick="prevTrack()">
                            <img src={previous}/>
                        </div>
                        <div class="playpause-track" onclick="playpauseTrack()">
                            <i class="fa fa-play-circle fa-1x"></i>
                        </div>
                        <div class="next-track" onclick="nextTrack()">
                            <img src={next}/>
                        </div>
                        <div className='repeat-track'>
                            <img src={repeate}/>
                        </div>
                    </div>

                    <div className='track-slider'>
                        <p class="current-time">00:00</p>
                        <input type="range" min="1" max="100" class="seek_slider" onchange="seekTo()" />
                        <p class="total-duration">02:00</p>
                    </div>
                </div>            
           </div>
            {/* Define the section for displaying the volume slider */}
            <div class="volume-container">
               <i class="fa fa-volume-down"></i>
                    <input type="range" min="1" max="100"
                    value="99" class="volume_slider" onchange="setVolume()" />
            </div>
 
        </div>
    )
}