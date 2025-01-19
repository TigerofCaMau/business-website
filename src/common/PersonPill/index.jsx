import { motion } from 'framer-motion';
import { getVariants } from '../../utils/animation';
import Image from 'next/image';
import styles from './styles.module.css';

const PersonPill = ({ person }) => (
    <div className={styles.personPill}>
        <motion.div
            className={styles.personPillBg}
            initial="initial"
            animate="animate"
            variants={getVariants(person.delay)}
            style={{ backgroundColor: person.bg }}
        >
            <Image
                className={styles.personPillImage}
                src={person.src}
                alt={person.alt || 'Person'}
                width={100}
                height={100}
            />
        </motion.div>
    </div>
);

export default PersonPill;