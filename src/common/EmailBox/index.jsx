import { LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';
import styles from './styles.module.css';

const EmailBox = () => {
    return (
        <motion.div
            className={styles.emailBox}
            initial={{
                width: ".5rem",
                borderRadius: "100%"
            }}
            whileInView={{
                width: "70%",
                borderRadius: "5rem",
                transition: {
                    type: "easeOut",
                    duration: 1,
                }
            }}

        >
            {/* Icon */}
            <motion.div
                variants={containerVariants(0.6)}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true }}
            >
                <LuMail size={30} color='grey' />
            </motion.div>

            {/* Input */}
            <motion.input
                className={styles.input}
                variants={containerVariants(0.7)}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true }}
                type="email"
                placeholder="Enter Email"
            />

            {/* Get funded button */}
            <motion.div
                className={styles.getFunded}
                variants={containerVariants(0.9)}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true }}
            >
                Get Funded
            </motion.div>
        </motion.div>
    );
};

export default EmailBox;