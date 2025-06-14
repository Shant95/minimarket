import CatalogItem from '../CatalogItem/CatalogItem';
import styles from './styles.module.css';
import { MenuLinks } from '../../utils/MenuLinks';
const colors = ['orange', 'lightblue', 'green', 'rose', 'darkgreen', 'pink', 'salmon', 'cian', 'yellow']


const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <h2>Каталог интернет-магазина</h2>
            <ul className={styles.items}>
                {MenuLinks.map((item, index) => (
                    <li className={styles.item}>
                        <CatalogItem 
                        text={item.name} 
                        image={item.image} 
                        imageAlt={item.name} 
                        backgroundColor={colors[index % colors.length]} 
                        href={item.subcategories[0].url.split('/')[1]} />

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catalog;