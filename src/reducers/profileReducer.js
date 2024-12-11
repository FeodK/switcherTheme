import { UPDATE_NAME, UPDATE_EMAIL } from "../actions/actionTypes";

const initialState = {
  name: "Guest",
  email: "guest@email.com",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
