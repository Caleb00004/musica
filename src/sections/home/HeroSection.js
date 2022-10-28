import Hero from './Frame.png'
import Rectangle from './Rectangle 15.svg'
import Heart from '../album/images/Heart.svg'
import HeroSvg from './HeroSection.svg'
import { useNavigate } from 'react-router-dom'
import './heroSection.css'

export default function HeroSection() {

    const navigateTo = useNavigate()
    
    return (
        <div className="hero">
            <div className="image">
                <img src={HeroSvg}></img>
            </div>
            <div className='top-charts'>
            <h2>Top Charts</h2>
                <div className='charts-list'>
                    <div onClick={() => navigateTo('/album')} className='chart-card'>
                        <img className='chart-image' width={'15%'} src={Rectangle} ></img>
                        <div className='card-details'>
                            <h5>Golden age of 80s</h5>
                            <p style={{color: 'grey'}}>Sean swadder</p>
                            <p>2:34:45</p>
                        </div>
                        <img className='heart-img' src={Heart} alt='heart'/>
                    </div>
                    <div onClick={() => navigateTo('/album')} className='chart-card'>
                        <img className='chart-image' width={'15%'} src={Rectangle} ></img>
                        <div className='card-details'>
                            <h5>Reggae and blues</h5>
                            <p style={{color: 'grey'}}>DJ Yk Mule</p>
                            <p>2:34:45</p>
                        </div>
                        <img className='heart-img' src={Heart} alt='heart'/>
                    </div>
                    <div onClick={() => navigateTo('/album')} className='chart-card'>
                        <img className='chart-image' width={'15%'} src={Rectangle} ></img>
                        <div className='card-details'>
                            <h5>Toorrows Tunes</h5>
                            <p style={{color: 'grey'}}>obi Datti</p>
                            <p>2:34:45</p>
                        </div>
                        <img className='heart-img' src={Heart} alt='heart'/>
                    </div>
                </div>

            </div>
        </div>
    )
}