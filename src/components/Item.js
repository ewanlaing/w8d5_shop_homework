import React from 'react';
import {Link} from 'react-router-dom';


const Item = ({product, setCurrentProduct}) => {

  
    const handleButton = () => {
      setCurrentProduct(product);
    }

    return(
        <>
        <li>
            <p>{product.title}</p>
            <button onClick={handleButton}>View Details</button>
        </li>
        </>
    )

}

export default Item;