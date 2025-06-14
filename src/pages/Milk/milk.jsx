import ProductsPageLayout from '../../components/ProductsPageLayout/ProductPageLayout';

const Milk = ({ onMoreClick, onAddToCart }) => {
    return(
        <ProductsPageLayout category={'milk'} onAddToCart={onAddToCart} onMoreClick={onMoreClick}/>
    )
    
}

export default Milk;