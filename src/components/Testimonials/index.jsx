import SlickSlider from '@/src/common/SlickSlider';
import styles from './styles.module.css';

const Testimonials = () => {
    return (
        <div className={styles.wrapper} id="testimonials">
            <div className={styles.container}>
                <div className={styles.tContainer}>
                    {/* Head */}
                    <div className={styles.head}>
                        <span className="tag">Testimonials</span>
                        <span className="title">Access capital that compliments traditional funding options</span>
                        <span className="description">What people say about us</span>
                    </div>
                </div>

            </div>
            
            {/* Slider */}
            <SlickSlider />
        </div>
    );
};

export default Testimonials;