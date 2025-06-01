import styles from './styles.module.css';
import logo from '../../images/UI/logo.png';
import MenuButton from '../MenuButton/MenuButton';
import SearchBar from '../SearchBar/SearchBar';
import NavButton from '../NavButton/NavButton';
import orders from '../../images/UI/orders.svg';
import cart from '../../images/UI/cart.svg';
import user from '../../images/UI/user.svg';
import NavBar from '../NavBar/NavBar';

const Header = ({ onOpenAuthModal, onOpenCart, cartItems, onOpenMenu }) => {
    const handleClickAuthButton = () => {
        onOpenAuthModal();
    };

    const handleClickCartButton = () => {
        onOpenCart();
    };

    const handleClickMenuButton = () => {
        onOpenMenu();
    }

    return (
        <div className={styles.header}>
            <div className={styles.content}>

                <div className={styles.wrapper}>
                    <a href="/" >
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    </a>
                    <MenuButton onClick={handleClickMenuButton}/>
                </div>

                <div className={styles.searchWrapper}>
                    <SearchBar />
                </div>

                <div className={styles.buttonsWrapper}>
                    <NavButton
                        icon={orders}
                        iconAlt={'orders'}
                        text={'Заказы'}
                    />
                    <NavButton
                        icon={cart}
                        iconAlt={'cart'}
                        text={'Корзина'}
                        showCounter={true}
                        onClick={handleClickCartButton}
                        cartItems={cartItems}
                    />
                    <NavButton
                        icon={user}
                        iconAlt={'user'}
                        text={'Войти'}
                        onClick={handleClickAuthButton}
                    />
                </div>
            </div>

            <div className={styles.navContainer}>
                <NavBar />
            </div>
        </div>
    );
}

export default Header;