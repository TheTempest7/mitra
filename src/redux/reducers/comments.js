import {GET_COMMENTS, SET_COMMENTS, TOGGEL_COMMENTS } from "../constants";

const initialState = {
postID:"",
currentComments:[],
toggleComments:false,
};

const comments = (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_COMMENTS: 
    return {
        ...state, 
        postID: payload,
    };
    case SET_COMMENTS: 
    return {
        ...state, 
        currentComments: payload,
    };
    case TOGGEL_COMMENTS:
        return {
            ...state,
            toggleComments:!state.toggleComments
        }
    default: return state;
}
};

export default comments;