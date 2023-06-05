import { takeEvery, put, call, fork, take } from 'redux-saga/effects';
import { GET_POSTS, GET_COMMENTS, SEARCH_POSTS, ERROR_UPLOAD_COMMENTS, ERROR_UPLOAD_POSTS } from '../constants';
import {getPosts, getComments} from '../../api/index';
import { setPosts, setComments } from '../actions/actionCreator';


const delay = (time) => new Promise((resolve,reject) => {
    setTimeout(resolve,time * 1000)
});

export function* workSetPostsSaga(actions){
    try {
        yield delay(0.5);
        const {data} = yield getPosts(actions.payload);
        yield put(setPosts(data));
    } catch {
        yield put({ 
            type:ERROR_UPLOAD_POSTS, 
            payload: "Failed getting posts, unfortunetly something went wrong"})
    }

}

export function* workSetComments(actions){
    try {
        const {data} = yield getComments(actions.payload);
        console.log(data);
        yield put(setComments(data));
    } catch {
        yield put({ 
            type:ERROR_UPLOAD_COMMENTS, 
            payload: "Failed getting comments, unfortunetly something went wrong"})
    }

}

export function* searchPosts(){
    console.log("working");
}

export function* watchClickSaga(){
    yield takeEvery(GET_POSTS,workSetPostsSaga);
    yield takeEvery(GET_COMMENTS,workSetComments);
    yield takeEvery(SEARCH_POSTS,searchPosts)
}

export default function* rootSaga() {
    yield watchClickSaga();
}