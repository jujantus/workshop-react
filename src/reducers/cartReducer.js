const ADD_TO_CART = "ADD_TO_CART";

let cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.concat(action.product)
    default:
      return state;
  
  }
};

export default cartReducer;
