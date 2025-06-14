import ProductsPageLayout from "../../components/ProductsPageLayout/ProductPageLayout";


const fruits =({onAddToCart,onMoreClick}) => {
        
    return (
        <ProductsPageLayout category={'fruits'} onAddToCart={onAddToCart} onMoreClick={onMoreClick}/>
    )

}

export default fruits;