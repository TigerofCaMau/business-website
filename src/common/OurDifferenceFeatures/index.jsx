import { motion } from 'framer-motion';
import { ourDiffFeatures } from '@/src/utils/data';
import { containerVariants } from '@/src/utils/animation';
import Image from 'next/image';
import styles from './styles.module.css';

const OurDifferenceFeatures = ({ features }) => {
    return (
        <div className={styles.featuresContainer}>
            {ourDiffFeatures.map((feature, id) => (
                <motion.div
                    key={id}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((id + 1) * 0.1)}
                    className={styles.feature}
                >
                    <Image
                        src={feature.icon}
                        alt="features"
                        width={128}
                        height={128}
                    />
                    <span className="secondaryTitle">{feature.title}</span>
                    <span className={styles.description}>{feature.description}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default OurDifferenceFeatures;