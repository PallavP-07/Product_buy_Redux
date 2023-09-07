

// // src/Cart.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { incrementQuantity, decrementQuantity } from '../Redux/cartReducer';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             <p>{item.name}</p>
//             <h3>{item.price.amount}<span>{item.price.currencyCode}</span></h3>
//             <p>Quantity: {item.quantity}</p>
//             <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
//             <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
//             <p>Total: {item.price.amount * item.quantity}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;


// src/Cart.js
import React, { useEffect, useState } from 'react';
import '../Style/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity,removeFromCart } from '../Redux/cartReducer';
import { BsCurrencyRupee } from 'react-icons/bs';

const Cart = () => {
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };


 

  const total = cartItems.reduce((acc, item) => acc + item.price.amount * item.quantity, 0);
const payAmount=(total)=>{
  alert(`Pay Total Amount:${total}`);
}
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map((item) => (
      
        <div className="card" key={item.id}>
          <div className='picture'>
            <img src={item.images.nodes[0].src} alt="images " />
            <div className='all'>
            <div className='Title'>
              <h2>{item.title}</h2>
              
              <li>{item.attributes[0].name}:<span>{item.attributes[0].value}</span></li>
              <li>{item.attributes[1].name}:<span>{item.attributes[1].value}</span></li>
              <li>{item.attributes[2].name}:<span>{item.attributes[2].value}</span></li>
            </div>
            <div className='ink'>
            <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <input style={{width:'20px' , margin:'5px',border:'none'}} value={item.quantity} disabled />
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
            </div>
            </div>
          </div>
     
          <div className='price'>
          <p>Total:<BsCurrencyRupee /> {item.price.amount * item.quantity}</p>
          </div>
        </div>
      ))}
      <div className='checkout'>
        <p> SubTotal:<BsCurrencyRupee /> {total}</p>
        <button onClick={()=>payAmount(total)}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
