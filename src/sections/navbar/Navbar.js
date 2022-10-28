import logo from '../../icons/logo.png'
import { useNavigate } from 'react-router-dom'
import home from '../../icons/Home.png'
import music from '../../icons/music-library-2.png'
import radio from '../../icons/radio.png'
import profile from '../../icons/profile.png'
import SideNav from './Sidenav'
import './navbar.css'
import { useState } from 'react'

export default function Navbar() {

    const navigateTo = useNavigate()
    const [open,setOpen] = useState(false)

    console.log(window.innerWidth)

    function navToggle(){
        setOpen((prevData) => !prevData)
    }

    return (
        <nav>
            <svg onClick={navToggle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'white', transform: 'scaleX(-1)'}}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
        <div className='drop-nav open' id={open? 'open': 'close'}>
            <p onClick={() => (navigateTo('/'), setOpen(false))} ><img src={home} width={'15px'}/><span>Home</span></p>
            <p onClick={() => (navigateTo('/music'), setOpen(false))} ><img src={music} width={'15px'}/><span>My collections</span></p>
            <p onClick={() => (navigateTo('/radio'), setOpen(false)) } ><img src={radio} width={'15px'} /><span>Radio</span></p>
            <p onClick={() => (navigateTo('/profile'), setOpen(false)) } ><img src={profile} width={'15px'} /><span>Music videos</span></p>
            <p onClick={() => (navigateTo('/'), setOpen(false)) } ><img src={home} width={'15px'}/><span>Profile</span></p>
            <p onClick={() => (navigateTo('/'), setOpen(false)) } ><img src={home} width={'15px'} /><span>Log out</span></p>
        </div>
            <img className='bounce' src={logo}/>
            <input type='text' placeHolder='search artist' ></input>
        
        </nav>
    )
}