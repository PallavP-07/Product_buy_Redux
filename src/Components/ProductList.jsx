// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import '../Style/style.css';
// const ProductList = ({product}) => {
//     // const [product, setProduct] = useState();

// console.log("7",product)

//     const addProduct =()=>{
//         alert("button clicked")
//     }
    
//     console.log(product);
//     return (
//         <div className='content'>
//             {product && product.map(item => (
//                 <div className="main" key={item.id}>
//                     <div className='image'>
//                         <img src={item.images.nodes[0].src} alt="images " />
//                     </div>
//                     <div className='details'>
//                         <h2>{item.title}</h2>
//                         <p>{item.description}</p>
//                     </div>
//                     <div className='action'>
//                         <h3>{item.price.amount}<span>{item.price.currencyCode}</span></h3>
//                         <button  onClick={addProduct}>Add To Cart</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default ProductList


// src/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartReducer';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { BsCurrencyRupee } from 'react-icons/bs';

 import '../Style/style.css';
const ProductList = ({ products }) => {


  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
         <div className='content'>
            
            {products && products.map(item => (
                <div className="main" key={item.id}>
                    <div className='image'>
                        <img src={item.images.nodes[0].src} alt="images " />
                    </div>
                    <div className='details'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className='action'>
                        <h3><BsCurrencyRupee/><span>{item.price.amount}</span></h3>
                        <button onClick={() => handleAddToCart(item)} >Add <BsFillCartPlusFill/></button>
                    
                    </div>
                </div>
            ))}
        </div>
  );
};

export default ProductList;

