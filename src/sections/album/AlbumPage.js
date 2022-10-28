import albumImg from './images/Lead-image.svg'
import addMusicIcon from './images/music-square-add.svg'
import playIcon from './images/Play.svg'
import verticalDots from './images/more-vertical.svg'
import HeartImg from './images/Heart.svg'
import {createGlobalStyle} from 'styled-components'
import background from './images/Lead-image.svg'
import './album.css'

export default function Album() {

    let GlobalStyles;

    GlobalStyles = createGlobalStyle`
        html {
            @include clearfix;
            border-top: 10px solid rgba(255, 255, 255, .46);
            color: $white;
            position: relative; // added for pseudo-element

        &::before {
            content: ' ';
            position: fixed; // instead of background-attachment
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: white;
            background: url(${background}) no-repeat center center;
            background-size: cover;
            filter: brightness(20%);
            will-change: transform; // creates a new paint layer
            z-index: -1;
        }
        }


    `

    return (
        <div className="album-page">
            <GlobalStyles />
            <div className='album-header'>
                <img src={albumImg}></img>
                <div className='album-txt'>
                    <h1>Tomorrow's Tunes</h1>
                    <span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                        <p style={{paddingTop: '0.5em'}}>64 songs ~ 16 hrs+</p>
                    </span>

                    <div className='album-header-btns'>
                        <button> <img src={addMusicIcon}/><p> Play All</p></button>
                        <button> <img src={playIcon}/><p>Add to Collection</p></button>
                        <button> <img src={playIcon}/><p>Like</p></button>
                    </div>                    
                </div>
            </div>

            <table>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='first-row'> <img src={albumImg}/> <img alt='coin Icon' className='love-icon' src={HeartImg}/></td>
                        <td>Let me Love You <span className='song-type'>Single</span></td>
                        <td className='last-row'><div>4:17<span className='vertical-dots' ><img src={verticalDots}/></span></div></td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}