import React, {useState} from 'react';
import styled from'styled-components';

const Cart = ({cart, checkOut}) => {


  const [discount, setDiscount] = useState(0);
  const [text, setText] = useState("");

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

  

  const runningtotal = cart.reduce((runningTotal, item) => {
   return (runningTotal + item.price)
  },0)

  const handleDiscount = () => {
    setDiscount(1);
  }

  const total = discount > 0 ? ((runningtotal * .9).toFixed(2)): (runningtotal.toFixed(2))

  const handleButton = () => {
    checkOut(total);
  }

  const handleText = (event) => {
    setText(event.target.value);
  }
  

 

  const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: lightblue;
`


  return(
    <Flex>
      <div>
      <h2>Current Total: £{total}</h2>
        <h3>Enter 'DISCOUNT' for discount</h3>
        {/* <form onSubmit={handleDiscount}>
          <input type="text" value={text} onChange={handleText} name="text"/>
          <input type="submit"/>
        </form> */}
        <button onClick={handleDiscount}>Discount</button>
        <button onClick={handleButton}>CHECK OUT</button>
      </div>
      <div>
      {currentCart}
      </div>

    </Flex>
  )
}

export default Cart;