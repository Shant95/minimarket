import styles from './styles.module.css';

export function ChatMenu({onClick}) {
    const handleCloseChat=()=>{
        onClick();
    }

    return (
        <div className={styles.menuchat}>
            <div className={styles.contain}>
                <h3>Чат поддержки</h3>
                <p onClick={handleCloseChat}>X</p>
            </div>
            <div className={styles.items}>
                <p>Добрый день! Введите свои имя, email и номер телефона:</p>
                <div>
                    <input type="text" className={styles.input} placeholder="Введите свое имя" />
                </div>
                <div>
                    <input type="email" className={styles.input} placeholder="Введите свой e-mail" />
                </div>
                <div>
                    <input type="tel" className={styles.input} placeholder="Введите свой номер телефона" />
                </div>
                <div>
                    <input type="text" className={styles.input} placeholder="Введите текст сообщения" />
                </div>
                <button className={styles.button}>Отправить</button>
            </div>
            <div className={styles.footer}>
                <p>Используя чат, вы соглашаетесь с нашей политикой обработки персональных данных</p>
            </div>
        </div>
    )
}


export default ChatMenu;