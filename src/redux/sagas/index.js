import { takeEvery, put, call, fork, take } from 'redux-saga/effects';
import { GET_POSTS, GET_COMMENTS } from '../constants';
import {getPosts, getComments} from '../../api/index';
import { setPosts, setComments } from '../actions/actionCreator';

export function* workSetPostsSaga(){
const {data} = yield getPosts();
yield put(setPosts(data));
    }

export function* workSetComments(actions){
    const {data} = yield getComments(actions.payload);
    console.log(data);
    yield put(setComments(data));
}

export function* watchClickSaga(){
    yield takeEvery(GET_POSTS,workSetPostsSaga);
    yield takeEvery(GET_COMMENTS,workSetComments);
}

export default function* rootSaga() {
    yield watchClickSaga();
}