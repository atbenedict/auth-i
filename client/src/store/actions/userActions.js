import axios from "axios";
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
} from "./types";
const baseUrl = "http://localhost:5001/";
//FOR POSTS,PUTS,DELETES
const token = localStorage.getItem("token");
const request = {
  headers: {
    authorization: token
  }
};
export const registerUser = userRegistration => dispatch => {
  dispatch({ type: REGISTER_USER_START });
  axios
    .post(`${baseUrl}api/register`, userRegistration)
    .then(response =>
      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: REGISTER_USER_FAILURE, payload: error }));
};

export const getAllUsers = () => dispatch => {
  dispatch({ type: GET_ALL_USERS_START });
  axios
    .get(`${baseUrl}api/users`)
    .then(response =>
      dispatch({ type: GET_ALL_USERS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: GET_ALL_USERS_FAILURE, payload: error }));
};

export const getASingleUser = id => dispatch => {
  dispatch({ type: GET_A_SINGLE_USER_START });
  axios
    .get(`${baseUrl}api/users/${id}`)
    .then(response =>
      dispatch({ type: GET_A_SINGLE_USER_SUCCESS, payload: response.data })
    )
    .catch(error =>
      dispatch({ type: GET_A_SINGLE_USER_FAILURE, payload: error })
    );
};

//NEEDS AUTHORIZATION TOKEN
export const editUser = (id, changes) => dispatch => {
  dispatch({ type: EDIT_USER_START });
  axios
    .put(`${baseUrl}api/users/${id}`, changes, request)
    .then(response =>
      dispatch({ type: EDIT_USER_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: EDIT_USER_FAILURE, payload: error }));
};

//NEED TO HANDLE AUTHORIZATION TOKEN HERE!!
export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  axios
    .delete(`${baseUrl}api/users/${id}`)
    .then(response =>
      dispatch({ type: DELETE_USER_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: DELETE_USER_FAILURE, payload: error }));
};
