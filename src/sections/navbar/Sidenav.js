import './sidenav.css'
import home from '../../icons/Home.png'
import music from '../../icons/music-library-2.png'
import radio from '../../icons/radio.png'
import profile from '../../icons/profile.png'
//import home from '../../icons/Home.png'
import { useNavigate } from 'react-router-dom'
import testIcon from './Home.svg'

export default function SideNav() {

    const navigateTo = useNavigate()

    return (
        <section className='side-nav'>
            <div className='upper-side-nav'>
                <img onClick={() => navigateTo('/')} src={home} width={'20px'}/>
                <img onClick={() => navigateTo('/music')} src={music} width={'20px'}/>
                <img onClick={() => navigateTo('/radio')} src={radio} width={'20px'} />
                <img onClick={() => navigateTo('/profile')} src={profile} width={'20px'} />
            </div>

            <div className='lower-side-nav'>
                <img onClick={() => navigateTo('/')} src={home} width={'20px'}/>
                <img onClick={() => navigateTo('/')} src={home} width={'20px'} />
            </div>

        </section>
    )
}