import styles from './styles.module.css';
import { useEffect } from 'react';

const Overlay = ({children, onClose, isVisible}) => {
    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }
        // Cleanup on component unmount
        return () => {
            document.body.classList.remove(styles.noScroll);
        };
    }, [isVisible]);

    return ( 
        <div className={`${styles.overlay} ${isVisible ? styles.show : styles.hide}`} onClick={handleClose}>
            {children}
        </div>
     );
}
 
export default Overlay;