import styles from './styles.module.css';
import trash from '../../images/UI/trash.svg';

const CartItem = ({ product, onAddQuantity, onRemoveQuantity, onDeleteItem, quantity }) => {
    const addQuantity = () => {
        onAddQuantity(product.id)
    }

    const removeQuantity = () => {
        onRemoveQuantity(product.id)
    }

    const deleteItem = () => {
        onDeleteItem(product.id)
    }

    return (
        <div className={styles.item}>
            <div className={styles.image}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.product}>
                <h3 className={styles.name}>{product.name}</h3>
                <span className={styles.price}>{product.price}, {product.cents} руб</span>
            </div>

            <div className={styles.buttons}>
                {quantity === 1 ? (
                    <button className={styles.button} onClick={deleteItem}>
                        <img src={trash} alt="trash" />
                    </button>
                ) : (
                    <button className={styles.button} onClick={removeQuantity}>-</button>
                )}
                <div className={styles.quantity}>{quantity}</div>
                <button className={styles.button} onClick={addQuantity}>+</button>
            </div>
        </div>
    );
}

export default CartItem;