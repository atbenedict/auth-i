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
} from "../../store/actions/types";

import { getPost } from "../actions/postActions";

const initialState = {
  posts: [],
  singlePost: [],
  postsMessage: "",
  postToEdit: [],
  editedPost: []
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_WITH_POSTS_START:
      return {
        ...state,
        postsMessage: "Getting profile and posts..."
      };
    case GET_PROFILE_WITH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        postsMessage: "Got profile and posts!"
      };
    case GET_PROFILE_WITH_POSTS_FAILURE:
      return {
        ...state,
        postsMessage: "Failed to get profile and posts!"
      };
    case GET_USER_POSTS_START:
      return {
        ...state,
        postsMessage: "Getting user posts..."
      };
    case GET_USER_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        postsMessage: "Got user posts!"
      };
    case GET_USER_POSTS_FAILURE:
      return {
        ...state,
        postsMessage: "Failed to get user posts!"
      };

    case CREATE_POST_START:
      return {
        ...state,
        postsMessage: "Creating post..."
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        postsMessage: "Created post!"
      };
    case CREATE_POST_FAILURE:
      return {
        ...state,
        postsMessage: "Failed to create post!"
      };

    case GET_ALL_POSTS_START:
      return {
        ...state,
        postsMessage: "Getting ALL posts..."
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        postsMessage: "Got ALL the posts!"
      };
    case GET_ALL_POSTS_FAILURE:
      return {
        ...state,
        postsMessage: "Failed to get posts!"
      };

    case GET_POST_START:
      return {
        ...state,
        postsMessage: "Getting single post..."
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        singlePost: action.payload,
        postsMessage: "Got single post!"
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        postsMessage: "Failed to get post!"
      };

    case EDIT_POST_START:
      return {
        ...state,
        postToEdit: action.payload.id,
        postsMessage: "Editing post..."
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        // posts: action.payload,
        postsMessage: "Edited post!"
      };
    case EDIT_POST_FAILURE:
      return {
        ...state,
        postsMessage: "Failed to edit post!"
      };

    case DELETE_POST_START:
      return {
        ...state,
        postsMessage: "Deleting post..."
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        // posts: action.payload,
        postsMessage: "Deleted post!"
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        postsMessage: "Failed to delete post!"
      };
    default:
      return state;
  }
}
