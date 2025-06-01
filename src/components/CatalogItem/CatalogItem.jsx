import styles from './styles.module.css';

const CatalogItem = ({text, image, imageAlt, backgroundColor,href}) => {
    return ( 
        <div className={`${styles.catalogItem} ${backgroundColor ? styles[backgroundColor] : ''}`}>
            <a href={href}>
            <h3 className={styles.title}>{text}</h3>
            <div className={styles.image}>
                <img src={image} alt={imageAlt} />
            </div>
            </a>
        </div>
     );
}
 
export default CatalogItem;