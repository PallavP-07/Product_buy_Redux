export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const incrementItem = (productId) => ({
    type: 'INCREMENT_ITEM',
    payload: productId,
  });
  
  export const decrementItem = (productId) => ({
    type: 'DECREMENT_ITEM',
    payload: productId,
  });
  export const deleteId = (productId) => ({
    type: 'DELETE_ITEM',
    payload: productId,
  });