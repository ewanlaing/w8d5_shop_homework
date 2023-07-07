import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {

  const NavStyle = styled.ul`
  display:flex;
  justify-content: space-around;
  background-color: lightgreen;
  margin:0;
  `

  return(
    <NavStyle>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/products">Products</Link>
        </li>
        <li>
            <Link to="/cart">Cart</Link>
        </li>
    </NavStyle>
  )
}

export default NavBar;