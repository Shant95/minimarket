import styles from './styles.module.css';
import delivery from '../../images/UI/delivery.svg';

const NavBar = () => {
    return ( 
        <div className={styles.navBar}>
            <div className={styles.location}>
                <div className={styles.icon}>
                    <img src={delivery} alt="delivery" />
                </div>
                <p className={styles.address}>г.Москва, ул. Тверская д.1</p>
            </div>

            <div className={styles.links}>
                <a href="/" className={styles.link}>% Акции</a>
                <a href="/" className={styles.link}>Напитки</a>
                <a href="/" className={styles.link}>Готовая еда</a>
                <div className={styles.divider}></div>
                <a href="/" className={styles.link}>Напитки</a>
                <a href="/" className={styles.link}>Вопросы и ответы</a>
                <a href="/" className={styles.link}>О нас</a>
            </div>
        </div>
     );
}
 
export default NavBar;