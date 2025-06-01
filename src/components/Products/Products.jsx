import ProductCategory from '../ProductCategory/ProductCategory';
import styles from './styles.module.css';

const Products = ({ onAddToCart, onMoreClick }) => {
    return (
        <div className={styles.products}>
            <h2 className={styles.title}>Популярные продукты</h2>

            <div className={styles.container}>
                <ProductCategory backgroundColor={'milk'} title={'Из молока'} textColor={'lightblue'} category={'milk'} type={'popular'} onAddToCart={onAddToCart} onMoreClick={onMoreClick} />
                <ProductCategory backgroundColor={'meat'} title={'Мясо, птица'} textColor={'red'} category={'meat'} type={'popular'} onAddToCart={onAddToCart} onMoreClick={onMoreClick} />
            </div>
        </div>
    );
}

export default Products;