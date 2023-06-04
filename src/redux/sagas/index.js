import { takeEvery, put, call, fork, take } from 'redux-saga/effects';
import { GET_POSTS, GET_COMMENTS, SEARCH_POSTS } from '../constants';
import {getPosts, getComments} from '../../api/index';
import { setPosts, setComments } from '../actions/actionCreator';


const delay = (time) => new Promise((resolve,reject) => {
    setTimeout(resolve,time * 1000)
});

export function* workSetPostsSaga(){
    yield delay(0.5);
const {data} = yield getPosts();
yield put(setPosts(data));
}

export function* workSetComments(actions){
    const {data} = yield getComments(actions.payload);
    console.log(data);
    yield put(setComments(data));
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