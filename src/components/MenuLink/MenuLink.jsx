import styles from './styles.module.css';

const MenuLink = ({ link, onOpenSubMenu, isActive, setActiveLink }) => {
    const handleClickLink = () => {
        onOpenSubMenu();
        if (isActive) {
            setActiveLink(null);
        } else {
            setActiveLink(link);
        } 
    }

    return (
        <div className={`${styles.menuLink} ${isActive ? styles.active : ''}`} onClick={handleClickLink}>
            {link.image && (
                <div className={styles.image}>
                    <img src={link.image} alt="icon" />
                </div>
            )}
            <p className={styles.link}>{link.name}</p>
        </div>
    );
}

export default MenuLink;