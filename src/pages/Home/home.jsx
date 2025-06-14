import styles from './styles.module.css';
import Catalog from '../../components/Catalog/Catalog';
import Products from '../../components/Products/Products';
import Carousel from '../../components/Carousel/Carousel';




const Home = ({onAddToCart,onMoreClick}) => {

    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <Carousel/>
                <Catalog />
                <Products onAddToCart={onAddToCart} onMoreClick={onMoreClick} />
            </div>
          
        </div>
    )
}

export default Home;