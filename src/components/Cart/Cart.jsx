import CartItem from '../CartItem/CartItem';
import Overlay from '../Overlay/Overlay';
import styles from './styles.module.css';
import { useState } from 'react';

const Cart = ({ onClose, onClearCart, cartItems, handleUpdateCart }) => {
    const [isCartVisible, setIsCartVisible] = useState(true);

    const handleCloseCart = () => {
        setIsCartVisible(false);
        setTimeout(onClose, 200);
    };

    const handleClearCart = () => {
        onClearCart()
    };

    const handleAddQuantity = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        handleUpdateCart(updatedItems)
    };

    const handleRemoveQuantity = (id) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        handleUpdateCart(updatedItems)
    };

    const handleDeleteItem = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id)
        handleUpdateCart(updatedItems)
    };

    const totalPrice = cartItems.reduce((total, item) => {
        const priceWithCents = item.price + (item.cents / 100);
        return total + priceWithCents * (item.quantity || 1);
    }, 0).toFixed(2);

    return (
        <>
            <Overlay onClose={handleCloseCart} isVisible={isCartVisible} />
            <div className={`${styles.cart} ${isCartVisible ? styles.show : styles.hide} `}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Корзина</h2>
                    <p className={styles.closeButton} onClick={handleCloseCart}>x</p>
                </div>

                <div className={styles.container}>
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                product={item}
                                onAddQuantity={handleAddQuantity}
                                onRemoveQuantity={handleRemoveQuantity}
                                onDeleteItem={handleDeleteItem}
                                quantity={item.quantity}
                            />
                        ))
                    ) : (
                        <p className={styles.noItems}>Корзина пуста</p>
                    )}

                </div>

                <div className={styles.infos}>
                    <h3 className={styles.totalPrice}>Итого: {totalPrice} руб</h3>
                    <div className={styles.divider}></div>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.button}>Заказать</button>
                    <button className={styles.button} onClick={handleClearCart}>Очистить</button>
                </div>
            </div>
        </>
    );
}

export default Cart;