
const DECREMENT_STOCK = "DECREMENT_STOCK";
const FETCH_PRODUCTS = "FETCH_PRODUCTS";


let productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      state = state.concat(action.products)
      console.log(state)
      break
   
    case DECREMENT_STOCK:
       state = state.map(product => {
          if(product.id === action.id){
            product.stock--
          }
          return product
        })
        break
     
      default:
  }
  return state
};

export default productReducer;
