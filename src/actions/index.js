export const signIn = (data) => {
  return {
    type: "SIGN_IN",
    payload: data,
  };
};

export const signOut = (data) => {
  return {
    type: "SIGN_OUT",
    payload: data,
  };
};

export const updateImages = (data) => {
  return {
    type: "UPDATE_IMAGES",
    payload: data,
  };
};
export const clearImages = (data) => {
  return {
    type: "CLEAR_IMAGES",
    payload: data,
  };
};

export const updateCart = (data) => {
  return {
    type: "UPDATE_CART",
    payload: data,
  };
};
export const clearCart = (data) => {
  return {
    type: "CLEAR_CART",
    payload: data,
  };
};

export const updateImagesCount = (data) => {
  return {
    type: "UPDATE_IMAGES_COUNT",
    payload: data,
  };
};

export const updateSelectedSize = (data) => {
  return {
    type: "UPDATE_SELECTED_SIZE",
    payload: data,
  };
};

export const updateSubTotal = (data) => {
  return {
    type: "UPDATE_SUBTOTAL",
    payload: data,
  };
};

export const updateItemsSum = (data) => {
  return {
    type: "UPDATE_ITEMS_SUM",
    payload: data,
  };
};
