import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css';

const HowItWorksFeatures = ({ feature, id, detailVariants, featureVariants }) => {
    return (
        <motion.div
        key={id}
        initial="offscreen"
        whileInView="onscreen"
        variants={featureVariants}
        className={styles.feature}
    >
        {/* Left side */}
        <motion.div
            variants={detailVariants}
            initial="initial"
            animate="animate"
            className={styles.detail}
        >
            <span className="description">0{id + 1}</span>
            <span className="secondaryTitle">{feature.title}</span>
            <span className="text">{feature.description}</span>
        </motion.div>

        {/* Right side */}
        <div className={styles.icons}>
            <Image
                src={feature.icon}
                width={128}
                height={128}
                alt="Feature"
                style={{ translate: '50% 0rem' }}
                className={styles.image}
            />
        </div>
        </motion.div>
    );
};

export default HowItWorksFeatures;