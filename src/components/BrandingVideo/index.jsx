'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './styles.module.css';

const BrandingVideo = () => {
    const videoRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: videoRef,
        offset: ["start end", "end end"]
    });

    const videoScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <div className={styles.container}>
            <motion.video
                className={styles.video}
                ref={videoRef}
                loop
                muted
                autoPlay
                playsInline
                controls=""
                aria-label="Promotional branding video"
                style={{ scale: videoScale }}
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>
        </div>
    );
};

export default BrandingVideo;