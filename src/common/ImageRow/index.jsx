import PersonPill from '../PersonPill';
import styles from './styles.module.css';

const ImageRow = ({ data }) => (
    <div className={styles.imageRow}>
        {data.map((person) => (
            <PersonPill key={person.id || person.src} person={person} />
        ))}
    </div>
);

export default ImageRow;