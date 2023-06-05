import { combineReducers } from 'redux';
import posts from "./posts";
import comments from './comments';
import errors from './errors';

const reducer = combineReducers({
    posts,
    comments,
    errors,
});

export default reducer;