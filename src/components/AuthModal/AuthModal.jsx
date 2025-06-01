import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './styles.module.css';
import tick from '../../images/UI/tick.jpg';

const AuthModal = ({ onClose }) => {
    const [stepIndex, setStepIndex] = useState(0);
    const STEPS = ['AUTH', 'OTP', 'SUCCESS'];

    const onBack = () => {
        setStepIndex((prevStep) => prevStep - 1)
    }

    const onNext = () => {
        setStepIndex((prevStep) => prevStep + 1)
    }

    const handleCloseAuthModal = () => {
        onClose();
    }

    let ModalContent = {
        AUTH: (
            <Modal title={'Войти или зарегистрироваться'} onClose={handleCloseAuthModal} >
                <div className={styles.authModal}>
                    <p className={styles.text}>Мы отправим код из 4 цифр для подтверждения номера</p>
                    <label htmlFor="tel" className={styles.label}>Номер телефона*</label>
                    <input type="tel" name="tel" id="tel" placeholder='+7 (999) 123-45-67' className={styles.input}></input>
                    <div className={styles.divider}></div>
                    <button className={styles.button} onClick={onNext}>Получить код</button>
                </div>
            </Modal>
        ),
        OTP: (
            <Modal title={'Подтвердите номер телефона'} onClose={handleCloseAuthModal} >
                <div className={styles.authModal}>
                    <p className={styles.text}>Введите код который отправили вам по СМС</p>
                    <input type="text" name="code" id="code" placeholder='+7 (999) 123-45-67' className={styles.input}></input>
                    <span className={styles.span} onClick={onBack}>Изменить номер телефона</span>
                    <div className={styles.divider}></div>
                    <button className={styles.button} onClick={onNext}>Отправить</button>
                </div>
            </Modal>
        ),
        SUCCESS: (
            <Modal onClose={handleCloseAuthModal}>
                {( handleCloseModal ) => (
                <div className={styles.authModal}>
                    <div className={styles.tickImage}>
                        <img src={tick} alt="success" />
                    </div>
                    <h2 className={styles.successText}>Вы успешно авторизировались!</h2>
                    <button className={styles.button} onClick={handleCloseModal}>К покупкам</button>
                </div>
                )}
            </Modal>
        )
    }


    return (
        <>
            {ModalContent[STEPS[stepIndex]]}
        </>

    );
}

export default AuthModal;