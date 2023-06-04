import { GET_POSTS, SET_POSTS, SEARCH_POSTS} from "../constants";

const initialState = {
  search:'',
  posts:[],
};

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POSTS: 
      return {
        ...state, 
        posts: [ ...payload],
      };
    case SEARCH_POSTS:
      return {
        ...state,
        posts:[...state.posts.filter((i)=>i.title.includes(payload))],
      }
    
    default: return state;
  }
};

export default posts;