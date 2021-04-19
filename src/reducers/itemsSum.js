const initialState = 500;

const itemsSumReducer = (state = initialState, action) => {
  const itemsSum = action.payload;

  switch (action.type) {
    case "UPDATE_ITEMS_SUM": {
      return itemsSum;
    }
    default:
      return state;
  }
};

export default itemsSumReducer;
