import styles from './styles.module.css';
import { ProductsList } from '../../utils/ProductsList';
import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const ProductsPageLayout = ({ category, onAddToCart, onMoreClick }) => {
    const filteredProducts = ProductsList.filter(product => product.category === category)

    const brandsCount = filteredProducts.reduce((sum, product) => {
        sum[product.brend] = (sum[product.brend] || 0) + 1;
        return sum;
    }, {});


    const countriesCount = filteredProducts.reduce((sum, product) => {
        sum[product.country] = (sum[product.country] || 0) + 1;
        return sum;
    }, {});

    const minPrice = Math.min(...filteredProducts.map(product => product.price))
    const maxPrice = Math.max(...filteredProducts.map(product => product.price))

    const [selectedMinPrice, setSelectedMinPrice] = useState(minPrice)
    const [selectedMaxPrice, setSelectedMaxPrice] = useState(maxPrice)
    const [selectedBrands, setSelectedBrands] = useState([])
    const [selectedCountries, setSelectedCountries] = useState([])


       const handlePriceChange = (event) => {
        setSelectedMinPrice(Number(event.target.value));
        setSelectedMaxPrice(Number(event.target.value))
    }

    const handleBrandChange = (event) => {
        const brand = event.target.name;
        const checked = event.target.checked;
        setSelectedBrands(prevState => ({ ...prevState, [brand]: checked }));
    }
    const handleCountryChange = (event) => {
        const country = event.target.name;
        const checked = event.target.checked;
        setSelectedCountries(prevState => ({ ...prevState, [country]: checked }));
    }
    const anyBrandSelected = Object.values(selectedBrands).some(value => value);
    const anyCountrySelected = Object.values(selectedCountries).some(value => value);

    const selectedPrice= selectedMinPrice && selectedMaxPrice

    const filteredProductsByFilters = filteredProducts.filter(product => {
        const brandState = !anyBrandSelected || selectedBrands[product.brend];
        const countryState = !anyCountrySelected || selectedCountries[product.country];
        const priceState = product.price >= selectedMinPrice && product.price <= selectedMaxPrice
        return brandState && countryState && priceState;
    });

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <div className={styles.filter}>
                    <label className={styles.filterName}>бренд</label>
                    {Object.entries(brandsCount).map(([brand, count]) => (
                        <div key={brand} className={styles.filterItem}>
                            <input type="checkbox" name={brand} checked={!!selectedBrands[brand]} onChange={handleBrandChange} />
                            <p className={styles.text}>{brand} ({count})</p>
                        </div>
                    ))}

                </div>
                <div className={styles.filter}>
                    <label className={styles.filterName}>Цена</label>
                    <div className={styles.filterItems}>
                        <div className={styles.inputs}>
                            <input  min={minPrice}  value={selectedMinPrice} onChange={handlePriceChange} />
                            <input  max={maxPrice} value={selectedMaxPrice} onChange={handlePriceChange} />
                        </div>
                    </div>
                </div>
                <div className={styles.filter}>
                    <label className={styles.filterName}>Страна Производителя</label>
                    {Object.entries(countriesCount).map(([country, count]) => (
                        <div key={country} className={styles.filterItem}>
                            <input type="checkbox" name={country} checked={!!selectedCountries[country]} value={country} onChange={handleCountryChange} />
                            <p className={styles.text}>{country} ({count})</p>
                        </div>
                    ))}

                </div>
            </div>
            <div className={styles.productCards}>
                {filteredProductsByFilters.length === 0 ? (
                    <div className={styles.noProducts}>
                        Нет продуктов с такими параметрами
                    </div>
                ) : (
                    filteredProductsByFilters.map((product, index) => (
                        <ProductCard key={index} product={product} onAddToCart={onAddToCart} onMoreClick={onMoreClick} />
                    ))
                )}
            </div>
        </div>
    )
}

export default ProductsPageLayout;