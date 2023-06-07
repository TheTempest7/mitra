import { 
  GET_POSTS, SET_POSTS,
  GET_COMMENTS, SET_COMMENTS, 
  SEARCH_POSTS, TOGGEL_COMMENTS,
  SORT_POSTS, START
} from "../constants";

export const getPosts = (payload) => ({
    type: GET_POSTS,
    payload,
})

export const setPosts = (payload) => ({
  type:SET_POSTS,
  payload,
})

export const setID = (payload) => ({
  type:GET_COMMENTS,
  payload,
})

export const setComments = (payload) => ({
  type:SET_COMMENTS,
  payload,
})

export const serarchPosts = (payload) => ({
  type:SEARCH_POSTS,
  payload,
})

export const sortPosts = () => ({
type:SORT_POSTS,
})

export const blockComments = () => ({
  type:TOGGEL_COMMENTS,
})

export const start = (payload) => ({
  type:START,
  payload,
})