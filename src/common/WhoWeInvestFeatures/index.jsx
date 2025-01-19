import { whoWeInvest } from '@/src/utils/data';
import { motion } from 'framer-motion';
import { containerVariants } from '@/src/utils/animation';
import styles from './styles.module.css';

const WhoWeInvestFeatures = ({ features }) => {
    return (
        <div className={styles.features}>
            {whoWeInvest.map((feature, id) => (
                <motion.div
                    key={id}
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants(id + .05 + 1)}
                    className={styles.feature}
                >
                    <span className={styles.description}>{feature.title}</span>
                    <span className={styles.text}>{feature.description}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default WhoWeInvestFeatures;