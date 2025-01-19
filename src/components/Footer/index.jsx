import EmailBox from '@/src/common/EmailBox';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.footerContainer}>
                    <span className={styles.title}>Get Funded Today!</span>
                    <div className={styles.emailBox}>
                        <EmailBox />
                    </div>

                    <hr />
                    <ul className={styles.menu}>
                        <li className={styles.menuItems}>Home</li>
                        <li className={styles.menuItems}>What we do</li>
                        <li className={styles.menuItems}>How it works</li>
                        <li className={styles.menuItems}>Who we invest in</li>
                        <li className={styles.menuItems}>Testimonials</li>
                    </ul>

                    <hr />
                    <span className={styles.copyright}>Made by Nathan Nguyen</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;