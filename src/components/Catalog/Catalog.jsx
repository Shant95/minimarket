import CatalogItem from '../CatalogItem/CatalogItem';
import styles from './styles.module.css';
import bird from '../../images/catalog/bird.jpeg';
import bread from '../../images/catalog/bread.jpg';
import cheese from '../../images/catalog/cheese.jpeg';
import discount from '../../images/catalog/discount2.jpeg';
import fish from '../../images/catalog/fish.jpeg';
import food from '../../images/catalog/food.jpg';
import fruit from '../../images/catalog/fruits.jpg';
import meat from '../../images/catalog/meat.jpg';
import milk from '../../images/catalog/milk.jpg';
import salad from '../../images/catalog/salad.jpg';

const Catalog = () => {
    return ( 
        <div className={styles.catalog}>
            <h2>Каталог интернет-магазина</h2>
            <ul className={styles.items}>
                <li className={styles.itemLarge}>
                    <CatalogItem text={'Скидки по карте'} image={discount} imageAlt={'discount'} backgroundColor={'orange'}/>
                </li>
                <li className={styles.itemSmall}>
                    <CatalogItem text={'Все на шашлыки'} image={bird} imageAlt={'grill'} backgroundColor={'rose'}/>
                </li>
                <li className={styles.itemSmall}>
                    <CatalogItem text={'Рыба'} image={fish} imageAlt={'fish'} backgroundColor={'lighblue'}/>
                </li>
                <li className={styles.itemSmall}>
                    <CatalogItem text={'Готовая еда'} image={food} imageAlt={'food'} backgroundColor={'darkgreen'}/>
                </li>
                <li className={styles.itemLarge}>
                    <CatalogItem text={'Мясо, птица'} image={meat} imageAlt={'meat'} backgroundColor={'pink'}/>
                </li>
            </ul>

            <ul className={styles.items}>
                <li className={styles.itemSmall}>
                    <CatalogItem text={'Соусы, специи'} image={salad} imageAlt={'salad'} backgroundColor={'salmon'}/>
                </li>
                <li className={styles.itemLarge}>
                    <CatalogItem text={'Молочные продукты, яйцо'} image={milk} imageAlt={'milk'} backgroundColor={'cian'} href={'/milk'} />
                </li>
                <li className={styles.itemSmall}>
                    <CatalogItem text={'Овощи, фрукты'} image={fruit} imageAlt={'fruit'} backgroundColor={'green'}/>
                </li>
                <li className={styles.itemLarge}>
                    <CatalogItem text={'Сыры'} image={cheese} imageAlt={'cheese'} backgroundColor={'yellow'}/>
                </li>
                <li className={styles.itemSmall}>
                    <CatalogItem text={'Хлеб и выпечка'} image={bread} imageAlt={'bread'} backgroundColor={'salmon'}/>
                </li>
            </ul>
        </div>
     );
}
 
export default Catalog;