import { createAction, handleActions } from 'redux-actions';
import { call, delay, put, takeLatest, select, throttle } from 'redux-saga/effects';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}
export const initialState = {
    isAdded: false
}

const ADDARTICLE_REQUEST = 'board/ADDARTICLE_REQUEST';
const ADDARTICLE_SUCCESS = 'board/ADDARTICLE_SUCCESS';
const ADDARTICLE_FAILURE = 'board/ADDARTICLE_FAILURE';

export const addArticleRequest = createAction(ADDARTICLE_REQUEST, data => data)

export function* addArticleSaga() {
    yield takeLatest(ADDARTICLE_REQUEST, add);
}
function* add(action) {
    try{
       const response = yield call (addArticleAPI, action.payload)
       console.log("서버 다녀옴: "+JSON.stringify(response.data))
       const result = response.data
        const listBoard = JSON.stringify(result)
        localStorage.setItem("listBoard", listBoard)
       yield put({type: ADDARTICLE_SUCCESS, payload: response.data})
    }catch(error){
        yield put({type: ADDARTICLE_FAILURE, payload: error.message})
    }
}

const addArticleAPI = payload => axios.post(
    `${SERVER}/board/add`,payload, {headers}
)

const addArticle = handleActions({
    [HYDRATE] : (state, action) => ({
        ...state, ...action.payload
    })
}, initialState)

export default addArticle
