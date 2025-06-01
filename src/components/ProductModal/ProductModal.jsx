import Modal from '../Modal/Modal';
import styles from './styles.module.css';

const ProductModal = ({ product, onClose, onAddToCart }) => {
    const handleCloseProductModal = () => {
        onClose();
    }

    const handleAddToCart = () => {
        onAddToCart(product);
        onClose();
    }

    return (
        <Modal onClose={handleCloseProductModal}>
            <div className={styles.content}>

                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <h3 className={styles.productBrand}>{product.brend}</h3>
                        <p className={styles.productPrice}>{product.price},{product.cents} руб</p>
                        <button className={styles.addToCartButton} onClick={handleAddToCart}>В корзину </button>
                    </div>
                </div>

                <h3 className={styles.productDescriptionTitle}>Описание</h3>
                <p className={styles.productDescription}>{product.description}</p>


                <h3 className={styles.tableTitle}>Пищевая ценность в 100г</h3>
                <div className={styles.table}>
                    <div className={styles.tableValue}>
                        <span className={styles.value}>{product.calories}</span>
                        <p className={styles.valueInfo}>Калории</p>
                    </div>
                    <div className={styles.tableValue}>
                        <span className={styles.value}>{product.proteins}</span>
                        <p className={styles.valueInfo}>Белки</p>
                    </div>
                    <div className={styles.tableValue}>
                        <span className={styles.value}>{product.fats}</span>
                        <p className={styles.valueInfo}>Жиры</p>
                    </div>
                    <div className={styles.tableValue}>
                        <span className={styles.value}>{product.carbohydrates}</span>
                        <p className={styles.valueInfo}>Углеводы</p>
                    </div>
                </div>

            </div>
        </Modal>
    );
}

export default ProductModal;