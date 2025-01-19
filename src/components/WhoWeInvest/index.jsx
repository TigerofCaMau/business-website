import WhoWeInvestHead from '@/src/common/WhoWeInvestHead';
import WhoWeInvestFeatures from '@/src/common/WhoWeInvestFeatures';
import Image from 'next/image';
import persons from '@/public/persons.png';
import styles from './styles.module.css';

const WhoWeInvest = () => {
    return (
        <div className={styles.wrapper} id="whoWeInvest">
            <div className="container">
                <div className={styles.wwiContainer}>
                    {/* Left side */}
                    <div className={styles.leftSide}>
                        <WhoWeInvestHead
                            className={styles.head}
                            tag="Who We Invest In"
                            title="Digital businesses\nwith early traction"
                        />
                        
                        {/* Features */}
                        <WhoWeInvestFeatures />
                    </div>

                    {/* Right side */}
                    <div className={styles.rightSide}>
                        <Image
                            className={styles.image}
                            src={persons}
                            width={600}
                            height={600}
                            alt="Persons"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeInvest;