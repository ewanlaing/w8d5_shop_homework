import React from 'react';

const  ProductInfo = ({product, addToCart}) => {

    const handleClick = () => {
      addToCart(product);
    }


     return (
        <>
         <h2>{product.title}</h2>
         <h3>£{product.price}</h3>
         <img src={product.image} alt={product.title} width="200"/>
         <button onClick={handleClick}>Add to Cart</button>
         </>
     )
}

export default ProductInfo;