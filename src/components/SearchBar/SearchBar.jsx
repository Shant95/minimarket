import styles from './styles.module.css';
import search from '../../images/UI/search.svg';
import { useState } from 'react';

const SearchBar = ({onClick,}) => {
const handleClick = () =>{
    onClick ();
}
 const [inputValue,SetInputValue]=useState('');

 const handleInputChange = (e) =>{
    SetInputValue(e.target.value);
 }

    return ( 
        <div className={styles.searchBar} onClick={handleClick}>
            <input type="text" className={styles.input} placeholder='Найти товары в магазине...' value={inputValue} onChange={handleInputChange} />
            <div className={styles.icon}>
                <img src={search} alt="icon" />
            </div>
        </div>
     );
}
 
export default SearchBar;