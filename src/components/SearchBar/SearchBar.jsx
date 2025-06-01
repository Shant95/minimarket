import styles from './styles.module.css';
import search from '../../images/UI/search.svg';

const SearchBar = () => {
    return ( 
        <div className={styles.searchBar}>
            <input type="text" className={styles.input} placeholder='Найти товары в магазине...'/>
            <div className={styles.icon}>
                <img src={search} alt="icon" />
            </div>
        </div>
     );
}
 
export default SearchBar;