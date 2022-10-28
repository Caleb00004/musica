import Navbar from "./sections/navbar/Navbar";
import SideNav from "./sections/navbar/Sidenav";
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from "./sections/home/HomePage";
import MusicPage from "./sections/music/MusicPage";
import RadioPage from "./sections/radio/RadioPage";
import Profile from "./sections/profile/Profile";
import Album from "./sections/album/AlbumPage";
import MusicFooter from "./sections/footer/MusicFooter";
import { AnimatePresence } from 'framer-motion'

import './app.css'

function App() {

  const location = useLocation()
  
  return (
    <>
      <Navbar />
      <div className="page-layout">
        <div className="sidenav-section">
          <SideNav />
        </div>
        <div className="other-section">
          <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/music" element={<MusicPage />}></Route>
                <Route path="/album" element={<Album />}></Route>
                <Route path="/radio" element={<RadioPage />}></Route>
                <Route path="/profile" element={<Profile />}></Route>

              </Routes>
          </AnimatePresence>
         </div>
      </div>
      <MusicFooter />
    </>
  )
}

export default App;
