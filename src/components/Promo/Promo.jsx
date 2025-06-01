import Carousel from '../Carousel/Carousel';
import PromoCard from '../PromoCard/PromoCard';
import styles from './styles.module.css';
import discount from '../../images/promo/discount.jpeg';
import cashback from '../../images/promo/cashback.avif';
import coupon from '../../images/promo/coupon.webp';
import sticker from '../../images/promo/sticker.avif';
import favourite from '../../images/promo/favourite.png';

const Promo = () => {
    return (
        <div className={styles.promo}>
            <div className={styles.carouselWrapper}>
                <Carousel />
            </div>
            <div className={styles.cardsWrapper}>
                <PromoCard image={discount} imageAlt={'promo'} />
                <ul className={styles.cards}>
                    <li className={styles.card}>
                        <PromoCard showText={true} image={cashback} imageAlt={'cashback'} text={'Копи кешбэк'} />
                    </li>
                    <li className={styles.card}>
                        <PromoCard showText={true} image={coupon} imageAlt={'coupon'} text={'Купоны'} />
                    </li>
                    <li className={styles.card}>
                        <PromoCard showText={true} image={sticker} imageAlt={'sticker'} text={'Наклейки'} />
                    </li>
                    <li className={styles.card}>
                        <PromoCard showText={true} image={favourite} imageAlt={'favourite'} text={'Любимая категория'} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Promo;