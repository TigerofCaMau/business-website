'use client';

import { motion, useAnimation } from 'framer-motion';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import BrandingVideo from '@/src/components/BrandingVideo';
import WhatWeDo from '@/src/components/WhatWeDo';
import OurDifference from '@/src/components/OurDifference';
import HowItWorks from '@/src/components/HowItWorks';
import WhoWeInvest from '@/src/components/WhoWeInvest';
import Testimonials from '@/src/components/Testimonials';
import Footer from '@/src/components/Footer';
import './page.css';

export default function Home() {
  const controls = useAnimation();

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      <motion.div
        onViewportEnter={() => controls.start({
          backgroundColor: "var(--secondary-color",
        })}
        onViewportLeave={() => controls.start({
          backgroundColor: "white",
        })}
        viewport={{ amount: 0.4 }}
      >
        <OurDifference />
      </motion.div>

      <HowItWorks />

      <motion.div
        onViewportEnter={() => controls.start({
          backgroundColor: "var(--primary-color",
        })}
        onViewportLeave={() => controls.start({
          backgroundColor: "white",
        })}
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvest />
      </motion.div>
      <Testimonials />
      <Footer />
    </motion.div>
  );
}
