'use client';

import { features } from '@/src/utils/data';
import WhatWeDoHead from '@/src/common/WhatWeDoHead';
import Block from '@/src/common/Block';
import SupportBlock from '@/src/common/SupportBlock';
import styles from './styles.module.css';

const WhatWeDo = () => {
    return (
        <div className={styles.whatWrapper} id="whatWeDo">
            <div className={styles.container}>
                <div className={styles.whatContainer}>
                    {/* Head of section */}
                    <WhatWeDoHead
                        tag="What We Do"
                        title="Empower founders with non-dilutive capital and execution expertise"
                        description="Here is how we can evaluate"
                    />

                    {/* Two blocks */}
                    <div className={styles.blockContainer}>
                        <Block
                            title="Blue Advances"
                            description="Fund recurring growth expenses e.g. customer acquisition"
                            features={features.slice(0, 3)}
                        />
                        <Block
                            title="Blue Seed"
                            description="Fund one-offs to scale e.g. product, hiring"
                            features={features.slice(3, 6)}
                        />
                    </div>

                    {/* Support block */}
                    <SupportBlock
                        leftTitle="Blue Growth Support"
                        leftDescription="Data Insights and full stack expertise to supercharge growth"
                        rightDescriptions={[
                            "Actionable data insights by connecting revenue, marketing, and social media platforms",
                            "On-demand execution expertise at cost or revenue share across proposition design, engineering, marketing analytics, partnerships, brand, intellectual property, market expansion, and talent management",
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;