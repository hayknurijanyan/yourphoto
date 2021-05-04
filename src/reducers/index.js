import { combineReducers } from "redux";
import selectedSizeReducer from "./selectedSize";
import userReducer from "./user";
import imagesReducer from "./images";
import cartReducer from "./cart";
import imagesCountReducer from "./imagesCount";
import itemsSumReducer from "./itemsSum";
import subtotalReducer from "./subtotal";

const allReducers = combineReducers({
  user: userReducer,
  images: imagesReducer,
  imagesCount: imagesCountReducer,
  selectedSize: selectedSizeReducer,
  cart: cartReducer,
  itemsSum: itemsSumReducer,
  subtotal: subtotalReducer,
});

export default allReducers;
