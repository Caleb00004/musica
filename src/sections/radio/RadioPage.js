import {motion} from 'framer-motion'

export default function RadioPage() {
    return (
        <motion.div
            initial={false}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>Radio Page</h1>
        </motion.div>
    )
}