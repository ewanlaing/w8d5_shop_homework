import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import ProductInfo from './ProductInfo';

const ItemList = ({products, setCurrentProduct, currentProduct, addToCart}) => {

  const Flex = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: lightblue;
  `

    const productList = products.map((product, index) => {
      return(
      <Item product={product} key={index} setCurrentProduct={setCurrentProduct}/>
    )})

  return(
    <Flex>
        <div>
        {currentProduct ? <ProductInfo product={currentProduct} addToCart={addToCart}/> : <h2>Select an item</h2>}
        </div>
        <ul>
            <h1>Available for purchase:</h1>
            {productList}
        </ul>
    </Flex>
  )
}

export default ItemList;