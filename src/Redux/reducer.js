// reducers.js
const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, { ...action.payload, quantity: 1 }];
      case 'INCREMENT_ITEM':
        return state.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        );
      case 'DECREMENT_ITEM':
        return state.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
          case 'DELETE_ITEM':
            return [...state, { ...action.payload, quantity: 1 }];
      default:
        return state;
    }
  };
  
  export default cartReducer;
  