import {motion} from 'framer-motion'
import HeroSection from './HeroSection'
import Carousels from './Carousels'
import './home.css'
export default function Home() {
    return (
        <motion.div
            className='home-page'
            initial={false}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <HeroSection />
            <Carousels />
        </motion.div>
    )
}