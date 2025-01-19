import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';
import Image from 'next/image';
import styles from './styles.module.css';

const WhatWeDoFeatures = ({ features }) => (
    <div className={styles.blockFeaturesContainer}>
        {features.map((feature, index) => (
            <motion.div
                key={feature.id || index}
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants((index + 1) * 0.1)}
                className={styles.blockFeature}
            >
                <Image
                    src={feature.icon}
                    alt={feature.title || 'Feature'}
                    width={60}
                    height={60}
                />
                <span className={styles.featureDescription}>{feature.title}</span>
            </motion.div>
        ))}
    </div>
);

export default WhatWeDoFeatures;