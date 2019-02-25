import axios from "axios";
import {
  GET_PROFILE_WITH_POSTS_START,
  GET_PROFILE_WITH_POSTS_SUCCESS,
  GET_PROFILE_WITH_POSTS_FAILURE,
  GET_USER_POSTS_START,
  GET_USER_POSTS_SUCCESS,
  GET_USER_POSTS_FAILURE,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILURE,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE
} from "./types";
const baseUrl = "https://backend-art.herokuapp.com/";
//FOR POSTS,PUTS,DELETES
const token = localStorage.getItem("token");
const headers = {
  headers: {
    authorization: token
  }
};

export const getProfileWithPosts = id => dispatch => {
  dispatch({ type: GET_PROFILE_WITH_POSTS_START });
  axios
    .get(`${baseUrl}api/users/posts/${id}`)
    .then(response =>
      dispatch({
        type: GET_PROFILE_WITH_POSTS_SUCCESS,
        payload: response.data
      })
    )
    .catch(error =>
      dispatch({ type: GET_PROFILE_WITH_POSTS_FAILURE, payload: error })
    );
};

export const getUserPosts = id => dispatch => {
  dispatch({ type: GET_USER_POSTS_START });
  axios
    .get(`${baseUrl}api/posts/users/${id}`)
    .then(response =>
      dispatch({
        type: GET_USER_POSTS_SUCCESS,
        payload: response.data
      })
    )
    .catch(error => dispatch({ type: GET_USER_POSTS_FAILURE, payload: error }));
};

export const createPost = post => dispatch => {
  console.log("adding");
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      authorization: token
    }
  };
  dispatch({ type: "CREATE_POST_START" });
  axios
    .post("https://backend-art.herokuapp.com/api/posts", post, headers)
    .then(response =>
      dispatch({ type: "CREATE_POST_SUCCESS", payload: response.data })
    )
    .then(() =>
      axios
        .get("https://backend-art.herokuapp.com/api/posts")
        .then(response =>
          dispatch({ type: "GET_ALL_POSTS_SUCCESS", payload: response.data })
        )
    )
    .catch(error => dispatch({ type: "GET_ALL_POSTS_FAILURE", payload: error }))
    .catch(error => console.log(error.message));
};

export const getAllPosts = () => dispatch => {
  dispatch({ type: GET_ALL_POSTS_START });
  axios
    .get("https://backend-art.herokuapp.com/api/posts")
    .then(response =>
      dispatch({
        type: GET_ALL_POSTS_SUCCESS,
        payload: response.data
      })
    )
    .catch(error => dispatch({ type: GET_ALL_POSTS_FAILURE, payload: error }));
};

export const getPost = id => dispatch => {
  dispatch({ type: GET_POST_START });
  axios
    .get(`https://backend-art.herokuapp.com/api/posts/${id}`)
    .then(response =>
      dispatch({
        type: GET_POST_SUCCESS,
        payload: response.data
      })
    )
    .catch(error => dispatch({ type: GET_POST_FAILURE, payload: error }));
};

export const editPost = (id, changes) => dispatch => {
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      authorization: token
    }
  };
  dispatch({ type: EDIT_POST_START, payload: id });
  axios
    .put(`https://backend-art.herokuapp.com/api/posts/${id}`, changes, headers)
    .then(response =>
      dispatch({ type: EDIT_POST_SUCCESS, payload: response.data })
    )
    .then(getAllPosts())
    .catch(error => dispatch({ type: EDIT_POST_FAILURE, payload: error }));
};

export const deletePost = id => dispatch => {
  const token = localStorage.getItem("token");
  const headers = {
    headers: {
      authorization: token
    }
  };
  dispatch({ type: "DELETE_POST_START" });
  axios
    .delete(`https://backend-art.herokuapp.com/api/posts/${id}`, headers)
    .then(response =>
      dispatch({ type: "DELETE_POST_SUCCESS", payload: response.data })
    )
    .then(() =>
      axios
        .get("https://backend-art.herokuapp.com/api/posts")
        .then(response =>
          dispatch({ type: "FETCH_PHOTOS_SUCCESS", payload: response.data })
        )
    )
    .catch(error => dispatch({ type: "FETCH_PHOTOS_FAILURE", payload: error }))
    .then(() => {})
    .catch(error => dispatch({ type: "DELETE_POST_FAILURE", payload: error }));
};
