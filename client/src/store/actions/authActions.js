import axios from "axios";
import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  USER_LOGIN
} from "./types";
const baseUrl = "http://localhost:5001/";
//FOR POSTS,PUTS,DELETES
// const token = localStorage.getItem("jwt");
// const request = {
//   headers: {
//     authorization: token
//   }
// };
export const loginUser = userCredentials => dispatch => {
  dispatch({ type: USER_LOGIN_START });
  axios
    .post(`${baseUrl}api/login`, userCredentials)
    .then(response => {
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("username", userCredentials.username);
      window.localStorage.setItem("userId", response.data.id);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
    })
    .catch(error => dispatch({ type: USER_LOGIN_FAILURE, payload: error }));
};

export const logoutUser = () => dispatch => {
  dispatch({ type: USER_LOGOUT });
};

export const secretLogin = () => dispatch => {
  dispatch({ type: USER_LOGIN });
};
//REMEMBER TO PUT THIS IN REDUCER!!!!!
//localStorage.setItem("token", response.data.token);
//this.props.history.push('/');
