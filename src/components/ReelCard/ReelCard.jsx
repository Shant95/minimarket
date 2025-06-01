import styles from './styles.module.css';

const ReelCard = ({image, imageAlt, link}) => {
    return ( 
        <div className={styles.card}>
            <a className={styles.link} href={link}>
                <img src={image} alt={imageAlt}/>
            </a>
        </div>
     );
}
 
export default ReelCard;