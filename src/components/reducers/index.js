import cart from "./cartReducer";
import total from "./totalReducer";
import products from "./productReducer";
import { combineReducers } from "redux";

export default combineReducers({
  total: total,
  cart: cart,
  products: products
});
