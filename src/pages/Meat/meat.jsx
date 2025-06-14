import ProductsPageLayout from "../../components/ProductsPageLayout/ProductPageLayout";


const Meat = ({ onMoreClick, onAddToCart }) => {
    
    
    return (
        <ProductsPageLayout category={'meat'} onAddToCart={onAddToCart} onMoreClick={onMoreClick}/>
    )
}

export default Meat;