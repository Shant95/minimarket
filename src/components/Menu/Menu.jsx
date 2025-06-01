import MenuLink from '../MenuLink/MenuLink';
import Overlay from '../Overlay/Overlay';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { MenuLinks } from './../../utils/MenuLinks';

const Menu = ({ onClose }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [activeLink, setActiveLink] = useState(null);
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    useEffect(() => {
        if (activeLink) {
            setIsSubMenuVisible(true);
        } else {
            setIsSubMenuVisible(false);
        }
    }, [activeLink]);

    const handleCloseMenu = () => {
        setIsMenuVisible(false);
        setTimeout(onClose, 200);
    };

    const handleOpenSubMenu = (link) => {
        setActiveLink(link);
    };

    return (
        <>
            <Overlay onClose={handleCloseMenu} isVisible={isMenuVisible} />
            <div className={`${styles.menu} ${isMenuVisible ? styles.show : styles.hide} `}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Меню</h2>
                    <p className={styles.closeButton} onClick={handleCloseMenu}>x</p>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.container}>
                        {MenuLinks.map((link) => (
                            <MenuLink
                                key={link.id}
                                link={link}
                                onOpenSubMenu={() => handleOpenSubMenu(link)}
                                isActive={activeLink === link}
                                setActiveLink={setActiveLink} />
                        ))}
                    </div>
                    <div className={styles.subContainer}>
                        {activeLink && activeLink.subcategories && (
                            <div className={`${styles.subMenu} ${isSubMenuVisible ? styles.fadeIn : styles.fadeOut}`}>
                                {activeLink.subcategories.map((subcategory) => (
                                    <a key={subcategory.name} className={styles.subMenuItem} href={subcategory.url}>
                                        <p className={styles.subMenuLink}>{subcategory.name}</p>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;