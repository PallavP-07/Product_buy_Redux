// // src/cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     cartItems: []
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload);
//     }

//   }
// });

// export const { addToCart } = cartSlice.actions;

// export default cartSlice.reducer;


// src/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("32",action)
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {

      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      state.cartItems.pop({ ...action.payload, quantity: 1 });
      console.log("51",action,state)
    },
  }
});

export const { addToCart, incrementQuantity, decrementQuantity,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
