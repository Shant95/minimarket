import ProductCard from '../ProductCard/ProductCard';
import styles from './styles.module.css';
import { ProductsList } from '../../utils/ProductsList';

const ProductCategory = ({ title, backgroundColor, textColor, category, onAddToCart, onMoreClick, type}) => {
const products = ProductsList.filter(product => product.category === category && product.type === type);
    return (
        <div className={styles.productCategory}>
            <div className={`${styles.titleContainer} ${backgroundColor ? styles[backgroundColor] : ''}`}>
                <h2 className={`${styles.title} ${textColor ? styles[textColor] : ''}`}>{title}</h2>
            </div>
            <div className={styles.cardsContainer}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onMoreClick={(product) => onMoreClick(product)} />
                ))}
            </div>
        </div>
    );
}

export default ProductCategory;