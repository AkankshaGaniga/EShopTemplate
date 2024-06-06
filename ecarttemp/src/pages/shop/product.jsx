
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from '../../context/shop-context'; 

const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id] || 0;

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price.toFixed(2)}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;


