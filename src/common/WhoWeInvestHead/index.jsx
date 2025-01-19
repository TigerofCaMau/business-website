import { motion } from 'framer-motion';
import { tagVariants, titleVariants } from '@/src/utils/animation';
import styles from './styles.module.css';

const HowWeInvestHead = ({ tag, title }) => {
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
                className={styles.title}>
                {title.split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </motion.span>
        </div>
    );
};

export default HowWeInvestHead;