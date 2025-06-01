import { useState } from 'react';
import Overlay from '../Overlay/Overlay';
import styles from './styles.module.css';

const Modal = ({ title, onClose, children }) => {
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setTimeout(onClose, 200)
    }
    return (
        <>
            <Overlay onClose={handleCloseModal} isVisible={isModalVisible} />
            <div className={`${styles.modal} ${isModalVisible ? styles.show : styles.hide} `} >
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <p onClick={handleCloseModal}>x</p>
                </div>

                <div className={styles.content}>
                    {typeof children === 'function' ? children(handleCloseModal) : children}
                </div>
            </div>
        </>
    );
}

export default Modal;