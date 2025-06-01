import styles from './styles.module.css';

const PromoCard = ({ image, imageAlt, text, showText = false }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={imageAlt} />
            {showText &&
                <div className={styles.textContainer}>
                    <p className={styles.text}>{text}</p>
                </div>
            }
        </div>
    );
}

export default PromoCard;