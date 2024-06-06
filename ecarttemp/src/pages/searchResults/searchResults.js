
import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import  SearchResults from '../../Results';


export const Shop = () => {
  const { PRODUCTS } = useContext(ShopContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSearchResults(true);
  };

  return (
    <div className="shop">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products"
        />
        <button type="submit">Search</button>
      </form>

    
      {showSearchResults && <SearchResults/>}
      
     
      {!showSearchResults && PRODUCTS && (
        <div className="products">
          {PRODUCTS.map(product => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
