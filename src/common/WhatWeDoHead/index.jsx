import { motion } from 'framer-motion';
import { tagVariants, titleVariants, descriptionVariants } from '@/src/utils/animation';
import styles from './styles.module.css';

const WhatWeDoHead = ({ tag, title, description }) => {
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
            <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={descriptionVariants}
                className="description"
            >
                {description}
            </motion.span>
        </div>
    );
};

export default WhatWeDoHead;
