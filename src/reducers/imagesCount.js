const initialState = 0;

const imagesCountReducer = (state = initialState, action) => {
  const count = action.payload;
  switch (action.type) {
    case "UPDATE_IMAGES_COUNT": {
      return count;
    }
    default:
      return state;
  }
};

export default imagesCountReducer;
