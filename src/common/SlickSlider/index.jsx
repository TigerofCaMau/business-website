import { testimonialsData } from '@/src/utils/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './styles.module.css';

const SlickSlider = () => {
    const settings = {
        dots: true,


        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        touchToMove: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        ]
    }

    return (
        <div className={styles.wrapper}>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, id) => (
                    <div key={id} className={styles.comment}>
                        {/* Upper section */}
                        <div className={styles.content}>
                            <Image
                                src={"/apos.svg"}
                                width={40}
                                height={30}
                                alt="Apos"
                                className={styles.aposSlider}
                            />
                            <span>{testimonial.comment}</span>

                            {/* Lower section */}
                            <div className={styles.info}>
                                <div className={styles.avatar}>{testimonial.name[0]}</div>
                                <div className={styles.person}>
                                    <span>{testimonial.name}</span>
                                    <span>{testimonial.profession}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SlickSlider;