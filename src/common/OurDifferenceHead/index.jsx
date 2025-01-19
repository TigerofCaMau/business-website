import React from 'react';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants, descriptionVariants } from '@/src/utils/animation';
import styles from './styles.module.css';

const OurDifferenceHead = ({ tag, title, description }) => {
    return (
        <div className={styles.head}>
        <motion.span
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className={styles.tag}
        >
            {tag}
        </motion.span>
        <motion.span
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className={styles.title}
        >
            {title}
        </motion.span>
        <motion.span
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionVariants}
            className={styles.text}
        >
            {(description || '').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </motion.span>
    </div>
    );
};

export default OurDifferenceHead;