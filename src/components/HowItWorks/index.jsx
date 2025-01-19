import { hiwFeatures } from '@/src/utils/data';
import { detailVariants, featureVariants } from '@/src/utils/animation';
import HowItWorksHead from '@/src/common/HowItWorksHead';
import HowItWorksFeaturesList from '@/src/common/HowItWorksFeaturesList';
import styles from './styles.module.css';

const HowItWorks = () => {
    return (
        <div className={styles.wrapper} id="howItWorks">
            <div className="container">
                <div className={styles.hiwContainer}>
                    {/* Head */}
                    <HowItWorksHead 
                        tag="How It Works"
                        title="Unlocking potential along the growth journey"
                    />
                    
                    {/* Features */}
                    <HowItWorksFeaturesList
                        features={hiwFeatures}
                        detailVariants={detailVariants}
                        featureVariants={featureVariants}
                    />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;