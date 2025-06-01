import styles from './styles.module.css';

const NavButton = ({ icon, iconAlt, text, onClick, showCounter = false, cartItems = [] }) => {
    const counter = cartItems.length;
    const handleClick = () => {
        onClick();
    }
    return (
        <div className={styles.navButton} onClick={handleClick}>
            <div className={styles.icon}>
                <img src={icon} alt={iconAlt} />
                {showCounter && <p className={styles.counter}>{counter}</p>}  
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default NavButton;