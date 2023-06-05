import { ERROR_UPLOAD_COMMENTS, ERROR_UPLOAD_POSTS} from "../constants";

const initialState = {
    errorsCommemt:"",
    errorsPosts:"",
};

const errors = (state = initialState, { type, payload }) => {
    switch (type) {
        case ERROR_UPLOAD_COMMENTS: 
        return {
        ...state, 
        errorsCommemt: payload,
        };
    case ERROR_UPLOAD_POSTS:
        return {
        ...state,
        errorsPosts:payload,
        }
    default: return state;
    }
};

export default errors;