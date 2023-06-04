import {GET_COMMENTS, SET_COMMENTS } from "../constants";

const initialState = {
postID:"",
currentComments:[]
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
    default: return state;
}
};

export default comments;