import axios from "axios";
//DUMMY DATA ACTIONS HERE
import {
  FETCH_PHOTOS_START,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from "./types";
//DUMMY DATA FROM MOCK SERVER
export const getPhotos = () => dispatch => {
  dispatch({ type: FETCH_PHOTOS_START });
  axios
    .get("http://localhost:3333/photos/")
    .then(response =>
      dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_PHOTOS_FAILURE, payload: error }));
};

//MAKE IT EASIER TO LINK TO ACTIONS
export * from "./authActions";
export * from "./userActions";
export * from "./postActions";
