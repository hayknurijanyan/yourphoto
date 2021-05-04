const userReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    case "SIGN_OUT":
      return !state;
    default:
      return state;
  }
};

export default userReducer;
