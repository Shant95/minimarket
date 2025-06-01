import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { CarouselImages } from '../../utils/carousel';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselImages.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselImages.length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + CarouselImages.length) % CarouselImages.length);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.button} onClick={handlePrev}>
                <p className={styles.arrow}>➜</p>
            </div>

            <div className={styles.image}>
                <img
                    src={CarouselImages[currentIndex].image}
                    alt={CarouselImages[currentIndex].alt}
                    className={styles.img}
                />
            </div>

            <div className={styles.button} onClick={handleNext}>
                <p className={styles.arrow}>➜</p>
            </div>
            <div className={styles.dots}>
                {CarouselImages.map((item, index) => (
                    <div
                        key={item.image}
                        className={`${styles.dot} ${index === currentIndex ? styles.active : styles.inactive}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;