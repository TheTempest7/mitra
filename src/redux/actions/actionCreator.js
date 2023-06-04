import { GET_POSTS, SET_POSTS, GET_COMMENTS, SET_COMMENTS, SEARCH_POSTS } from "../constants";

export const getPosts = () => ({
    type: GET_POSTS
})

export const setPosts = (payload) => ({
  type:SET_POSTS,
  payload,
})

export const getComments = (payload) =>({
  type:GET_COMMENTS,
  payload,
})

export const setComments = (payload) =>({
  type:SET_COMMENTS,
  payload,
})

export const serarchPosts = (payload) =>({
  type:SEARCH_POSTS,
  payload,
})

