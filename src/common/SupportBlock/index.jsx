import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';
import styles from './styles.module.css';

const SupportBlock = ({ leftTitle, leftDescription, rightDescriptions }) => (
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={containerVariants(0.3)}
        className={styles.support}
    >
        {/* Left side */}
        <div className={styles.leftSide}>
            <span className="secondaryTitle">{leftTitle}</span>
            <span className="description">{leftDescription}</span>
        </div>

        {/* Right side */}
        <div className={styles.rightSide}>
            {rightDescriptions.map((desc, index) => (
                <span key={index} className="text">
                    {desc}
                </span>
            ))}
        </div>
    </motion.div>
);

export default SupportBlock;