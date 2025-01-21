'use client';

import { HeroData } from '@/src/utils/data';
import ImageRow from '@/src/common/ImageRow';
import EmailBox from '../../common/EmailBox';
import Image from 'next/image';
import styles from './styles.module.css';

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.container}>
                <Image
                    className={styles.backgroundArrow}
                    src="/hero-arrow.png"
                    alt="arrow"
                    width={700}
                    height={700}
                />
                
                <div className={styles.heroContainer}>
                    {/* Left side */}
                    <div className={styles.heroLeft}>
                        <ImageRow data={HeroData.slice(0, 3)} />
                        <ImageRow data={HeroData.slice(3, 6)} />
                    </div>

                    {/* Right side */}
                    <div className={styles.heroRight}>
                        <div className={styles.title}>
                            <span className={styles.line1}>Redefine How</span>
                            <span className={styles.line2}>You Grow your</span>
                            <span className={styles.line3}>Digital Business</span>
                        </div>

                        <div className={styles.description}>
                            Revenue-based funding and execution support designed for early-stage founders
                        </div>
                        
                        <EmailBox />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;