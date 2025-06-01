import styles from './styles.module.css'
import { ProductsList } from '../../utils/ProductsList';
import ProductCard from '../../components/ProductCard/ProductCard';

const Milk = ({onMoreClick,onAddToCart}) => {
    const filteredProducts = ProductsList.filter(product => ['milk1', 'Eggs', 'oil', 'Dairy', 'icecream'].includes(product.subcategories));

    const handleFilterProducts = (filterCriteria) => {
        let filteredProducts = ProductsList.filter(product => ['milk1', 'Eggs', 'oil', 'Dairy', 'icecream'].includes(product.subcategories));
        switch (filterCriteria) {
            case 'popular':
                filteredProducts = ProductsList.filter(product => product.type === 'popular');
                break;
            case 'priceAsc':
                filteredProducts = ProductsList.sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                filteredProducts = ProductsList.sort((a, b) => b.price - a.price);
                break;
            default:
                filteredProducts = ProductsList;
                return filteredProducts
        }
    }

    return (
        <div className={styles.milk}>
 
            <div className={styles.container}>
                <div className={styles.blok}>
                    <div className={styles.navigation}>
                        <a href="/"
                            className={styles.link}>
                            <span>Главная :</span>
                        </a>
                        <span>Молочные продукты, яйцо :</span>
                    </div>
                    <div className={styles.categories}>
                        <div className={styles.category}>
                            <div className={styles.title}>Торговая марка</div>
                            {[...new Set(ProductsList.map(product => product.brend))].map(brend => (
                                <div className={styles.name}>{brend}({brend.length})</div>
                            ))}
                        </div>
                        <div className={styles.category}>
                            <div className={styles.title}>Тип товара</div>
                            {[...new Set(ProductsList.map(product => product.subcategories))].map(subcategories => (
                                <div className={styles.name}>{subcategories}({subcategories.length})</div>))}
                        </div>
                        <div className={styles.category}>
                            <div className={styles.title}>Страна</div>
                            {[...new Set(ProductsList.map(product => product.country))].map(country => (
                                <div className={styles.name}>{country} ({country.length})</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.content} >
                    <div className={styles.contenttitle}>Молочные продукты, яйцо</div>
                    <div className={styles.contentlist}>
                        <p>Популярные</p>
                        <div className={styles.contentlistitem}>
                            <p onClick={handleFilterProducts('popular')}>Популярные</p>
                            <p onClick={handleFilterProducts('priceAsc')}>По возрастанию цены</p>
                            <p onClick={handleFilterProducts('priceDesc')}>По убыванию цены</p>
                        </div>
                    </div>
                    <div className={styles.items} >
                        {filteredProducts.map(product => (
                        <ProductCard product={product} key={product.id} onMoreClick={onMoreClick} onAddToCart={onAddToCart} />
                            ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Milk;