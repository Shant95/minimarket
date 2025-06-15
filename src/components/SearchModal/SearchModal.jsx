import styles from './styles.module.css';
import Modal from '../Modal/Modal';
import ProductCard from '../ProductCard/ProductCard';
import { ProductsList } from '../../utils/ProductsList';

const SearchModal = ({onAddToCart,onMoreClick, onClose}) => {
    return (
        <Modal title={'Искать Товари'} onClose={onClose}>
            <div className={styles.productCards}>
            {ProductsList.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onMoreClick={(product) => onMoreClick(product)}/>
            ))}
            </div>

        </Modal>
    )
}

export default SearchModal;