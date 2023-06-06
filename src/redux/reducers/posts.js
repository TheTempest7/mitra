import { GET_POSTS, SET_POSTS, SEARCH_POSTS, SORT_POSTS} from "../constants";

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
      };
    case SORT_POSTS:
      return {
        ...state,
        posts: [...state.posts.slice().sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        })],
      }
    
    default: return state;
  }
};

export default posts;