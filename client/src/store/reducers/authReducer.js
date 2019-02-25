import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_LOGIN
} from "../../store/actions/types";

const initialState = {
  currentUser: "",
  loggedIn: false,
  logInMessage: "wooooo"
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        currentUser: "",
        loggedIn: false,
        logInMessage: "Logging In..."
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
        logInMessage: "Login Success!"
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        currentUser: "",
        loggedIn: false,
        logInMessage: "Login Failed!"
      };
    case USER_LOGOUT:
      window.localStorage.removeItem("user");
      return {
        ...state,
        currentUser: "",
        loggedIn: false
      };
    case USER_LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
}
