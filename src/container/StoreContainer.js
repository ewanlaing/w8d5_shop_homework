import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import NavBar from '../components/NavBar';
import ItemList from '../components/ItemList';
import Home from '../components/Home';
import ProductInfo from '../components/ProductInfo';
import Cart from '../components/Cart';


const StoreContainer = () => {

    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null)
    const [cart, setCart] = useState([])
    const [funds, setFunds] = useState(1000)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    },[]);


    const addToCart = (product) => {
      const newCart = [...cart];
      newCart.push(product);
      setCart(newCart);
    }

    const checkOut = (total) => {
      const newFunds = funds - total;
      setFunds(newFunds);
      const newCart = [];
      setCart(newCart);
    }





    const Title = styled.h1`
        text-align: center;
        font-size: 4em;
        color: white;
        background-color: black;
        margin:0;
        `
    const Funds = styled.h2`
        text-align: right;
        color: white;
        background-color: black;
        margin:0;
    `
    

  
    return(
        <div>
            <Title>Ewan's Meagre Emporium</Title>
            <Funds>Current funds £{funds}</Funds>
            <Funds>Items in cart:{cart.length}</Funds>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<ItemList products={products} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} addToCart={addToCart}/>}/>
                    <Route path="/cart" element={<Cart cart={cart} checkOut={checkOut}/>}/>
                </Routes>
            </Router>

            {/* <ItemList products={products}/> */}
        </div>
    )

}

export default StoreContainer;