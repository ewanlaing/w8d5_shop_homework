import React from 'react';
import styled from'styled-components';

const Cart = ({cart, checkOut}) => {

  const currentCart = cart.map((product, index) => {
    return(
    <>
    <div>
      <h2>{product.title}</h2>
         <h3>£{product.price}</h3>
         <img src={product.image} alt={product.title} width="150"/>
         </div>
    </>
  )})

  const total = cart.reduce((runningTotal, item) => {
   return (runningTotal + item.price)
  },0)

  const handleButton = () => {
    checkOut(total);
  }

  const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: lightblue;
`


  return(
    <Flex>
      <div>
      <h2>Current Total: £{total}</h2>

        <button onClick={handleButton}>CHECK OUT</button>
      </div>
      <div>
      {currentCart}
      </div>

    </Flex>
  )
}

export default Cart;