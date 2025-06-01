import styles from './styles.module.css';

const MenuButton = ({onClick}) => {
    const handleClick = () => {
        onClick();
    }
    return ( 
        <div className={styles.button} onClick={handleClick}>
            <div className={styles.lines}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <p className={styles.text}>Меню</p>
        </div>
     );
}
 
export default MenuButton;