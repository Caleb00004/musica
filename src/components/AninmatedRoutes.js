
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from "../sections/home/HomePage";
import MusicPage from "../sections/music/MusicPage";
import RadioPage from "../sections/radio/RadioPage";
import Profile from "../sections/profile/Profile";

export default function AnimatedRoutes() {

    const location = useLocation()

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/music" element={<MusicPage />}></Route>
            <Route path="/radio" element={<RadioPage />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    )
}