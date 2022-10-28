import { motion } from "framer-motion"
export default function Profile() {
    return (
        <motion.div
            initial={false}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>Profile Page</h1>
        </motion.div>
    )
}