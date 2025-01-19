'use client'

import { useState } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { menuItems } from '@/src/utils/data';
import { Link } from 'react-scroll'; 
import styles from './styles.module.css';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => setMobileMenuOpen((prev) => !prev);
    const handleCloseMenu = () => setMobileMenuOpen(false);

    return (
        <div className={styles.wrapper}>
            {/* Desktop version */}
            <div className="container">
                <div className={styles.navContainer}>
                    {/* Left side */}
                    <div className={styles.logo}>
                        <span>Nathan Nguyen</span>
                    </div>

                    {/* Right side */}
                    <nav className={styles.rightSide}>
                        <ul className={styles.navMenu}>
                            {menuItems.map(({ id, label, offset }) => (
                                <Link
                                    key={id}
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    offset={offset}
                                    duration={500}
                                    className={styles.navLinks}
                                >
                                    {label}
                                </Link>
                            ))}
                        </ul>
                        <div className={styles.fundButton}>Get funded</div>
                    </nav>
                </div>
            </div>

            {/* Mobile/tab version */}
            <div className={styles.navMobileContainer}>
                {/* Logo */}
                <span className={styles.mobileLogo}>Nathan Nguyen</span>
 
                {/* Hamburger menu icon */}
                {mobileMenuOpen ? (
                    <BiX size={30} onClick={handleMenuToggle} />
                ) : (
                    <BiMenuAltRight size={30} onClick={handleMenuToggle} />
                )}

                {/* Mobile menu */}
                <nav 
                    className={`${styles.navMobileMenu} ${mobileMenuOpen ? styles.open : ''}`}
                >
                    <ul className={styles.navMobileLinks}>
                        {menuItems.map(({ id, label, offset }) => (
                            <li 
                                key={id}
                                className={styles.mobileLink}
                            >
                                <Link
                                    to={id}
                                    spy={true}
                                    smooth={true}
                                    offset={offset}
                                    duration={500}
                                    onClick={handleCloseMenu}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.mobileFundButton}>Get Funded</div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;