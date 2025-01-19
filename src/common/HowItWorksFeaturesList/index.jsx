import HowItWorksFeatures from "../HowItWorksFeatures";
import styles from './styles.module.css';

const HowItWorksFeaturesList = ({ features, detailVariants, featureVariants }) => {
    return (
        <div className={styles.features}>
            {features.map((feature, id) => (
                <HowItWorksFeatures
                    key={id}
                    feature={feature}
                    id={id}
                    detailVariants={detailVariants}
                    featureVariants={featureVariants}
                />
            ))}
        </div>
    );
};

export default HowItWorksFeaturesList;