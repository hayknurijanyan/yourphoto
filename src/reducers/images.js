const initialState = [];

const imagesReducer = (state = initialState, action) => {
  const images = action.payload;
  switch (action.type) {
    case "UPDATE_IMAGES": {
      return images;
    }
    case "CLEAR_IMAGES": {
      return [];
    }
    default:
      return state;
  }
};

export default imagesReducer;
