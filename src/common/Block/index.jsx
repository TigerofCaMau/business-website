import { motion } from 'framer-motion';
import { titleVariants, descriptionVariants } from '@/src/utils/animation';
import WhatWeDoFeatures from '../WhatWeDoFeatures';
import styles from './styles.module.css';

const Block = ({ title, description, features }) => {
    return (
        <div className={styles.blocks}>
        <motion.span
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="secondaryTitle"
        >
            {title}
        </motion.span>
        <motion.span
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionVariants}
            className="text"
        >
            {description}
        </motion.span>

        <WhatWeDoFeatures features={features} />
    </div>
    );
};

export default Block;