import productsJson from "../../data/MOCK_DATA";

let productReducer = (state = productsJson, action) => {
  switch (action.type) {
    default:
      return state;
      break;
  }
};

export default productReducer;
