import styles from './styles.module.css';
import Catalog from '../../components/Catalog/Catalog';
import Products from '../../components/Products/Products';
import Promo from '../../components/Promo/Promo';
import Reels from '../../components/Reels/Reels';



const Home = ({onAddToCart,onMoreClick}) => {

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <Promo />
                <Reels />
                <Catalog />
                <Products onAddToCart={onAddToCart} onMoreClick={onMoreClick} />
            </div>
          
        </div>
    )
}

export default Home;