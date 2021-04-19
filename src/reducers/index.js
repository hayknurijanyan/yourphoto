import { combineReducers } from "redux";
import selectedSizeReducer from "./selectedSize";
import loggedReducer from "./isLogged";
import imagesReducer from "./images";
import cartReducer from "./cart";
import imagesCountReducer from "./imagesCount";
import itemsSumReducer from "./itemsSum";
import subtotalReducer from "./subtotal";

const allReducers = combineReducers({
  islogged: loggedReducer,
  images: imagesReducer,
  imagesCount: imagesCountReducer,
  selectedSize: selectedSizeReducer,
  cart: cartReducer,
  itemsSum: itemsSumReducer,
  subtotal: subtotalReducer,
});

export default allReducers;
