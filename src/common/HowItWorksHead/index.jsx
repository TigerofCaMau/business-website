import { motion } from 'framer-motion';
import { tagVariants, titleVariants } from '@/src/utils/animation';
import styles from './styles.module.css';

const HowItWorksHead = ({ tag, title }) => {
    return (
        <div className={styles.head}>
            <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={tagVariants}
                className="tag"
            >
                {tag}
            </motion.span>
            <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                className="title"
            >
                {title}
            </motion.span>
        </div>
    );
};

export default HowItWorksHead;