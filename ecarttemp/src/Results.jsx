import React from 'react'
import  { useContext } from 'react';
import { ShopContext } from './context/shop-context';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const { PRODUCTS } = useContext(ShopContext);

  if (!PRODUCTS) {
    return <p>Loading products...</p>;
  }

  const filteredProducts = PRODUCTS.filter(product =>
    product.name && product.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="search-results">
           {filteredProducts.length > 0 ? (
             filteredProducts.map(product => (
               <div key={product.id} className="product">
                 <h3>{product.name}</h3>
                 <p>{product.description}</p>
                <p>${product.price}</p>
               </div>
          ))
          ) : (
            <p>No products found</p>
          )}
        </div>
  )
}

export default SearchResults;

// import React, { useContext } from 'react';
// import { useLocation } from 'react-router-dom';
// import { ShopContext } from ';

// export const SearchResults = () => {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search).get('query');
//   const { products } = useContext(ShopContext); // Use 'products' from context

//   if (!products) {
//     return <p>Loading products...</p>;
//   }

//   const filteredProducts = products.filter(product =>
//     product.productName.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="search-results">
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map(product => (
//           <div key={product.id} className="product">
//             <img src={product.productImage} alt={product.productName} />
//             <h3>{product.productName}</h3>
//             <p>${product.price.toFixed(2)}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products found</p>
//       )}
//     </div>
//   );
// };
