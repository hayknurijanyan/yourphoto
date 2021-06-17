const initialState = ["10 x 15", 70, "Glossy"];

const selectedSizeReducer = (state = initialState, action) => {
  const selectedSize = action.payload;

  switch (action.type) {
    case "UPDATE_SELECTED_SIZE": {
      return selectedSize;
    }
    default:
      return state;
  }
};

export default selectedSizeReducer;
