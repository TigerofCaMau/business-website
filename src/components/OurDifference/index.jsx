import { ourDiffFeatures } from '@/src/utils/data';
import OurDifferenceHead from '@/src/common/OurDifferenceHead';
import OurDifferenceFeatures from '@/src/common/OurDifferenceFeatures';
import styles from './styles.module.css';

const OurDifference = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.ourDifferenceContainer}>
                    {/* Head */}
                    <OurDifferenceHead
                        tag="Our Difference"
                        title="Fair capital, hassle free"
                        description={`
                            Our mission is to level the playing field for early-stage growth capital.
                            We provide capital that is unbiased, flexible, and non-dilutive with the
                            execution support to accelerate value creation.
                        `}
                    />

                    <OurDifferenceFeatures features={ourDiffFeatures} />
                </div>
            </div>
        </div>
    );
};

export default OurDifference;