import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  GET_ALL_USERS_START,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_A_SINGLE_USER_START,
  GET_A_SINGLE_USER_SUCCESS,
  GET_A_SINGLE_USER_FAILURE,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE
} from "../../store/actions/types";

const initialState = {
  user: [],
  users: [],
  singleUser: [],
  userMessage: ""
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        userMessage: "Registering new user..."
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userMessage: "Registered new user!"
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        userMessage: "Failed to register new user!"
      };
    case GET_ALL_USERS_START:
      return {
        ...state,
        userMessage: "Getting all users..."
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        userMessage: "Got all users!"
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        userMessage: "Failed to get users!"
      };

    case GET_A_SINGLE_USER_START:
      return {
        ...state,
        userMessage: "Getting single user..."
      };
    case GET_A_SINGLE_USER_SUCCESS:
      return {
        ...state,
        singleUser: action.payload,
        userMessage: "Got single user!"
      };
    case GET_A_SINGLE_USER_FAILURE:
      return {
        ...state,
        userMessage: "Failed to get single user!"
      };

    case EDIT_USER_START:
      return {
        ...state,
        userMessage: "Editing user..."
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userMessage: "Edited user!"
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        userMessage: "Failed to edit user!"
      };

    case DELETE_USER_START:
      return {
        ...state,
        userMessage: "Deleting user..."
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        user: [],
        userMessage: "User Deleted!"
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        userMessage: "Failed to delete user!"
      };

    default:
      return state;
  }
}
