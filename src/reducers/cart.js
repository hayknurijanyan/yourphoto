const initialState = [];

const cartReducer = (state = initialState, action) => {
  const cart = action.payload;

  switch (action.type) {
    case "UPDATE_CART": {
      return cart;
    }
    case "CLEAR_CART": {
      return [];
    }
    default:
      return state;
  }
};

export default cartReducer;
