import { takeLatest } from 'redux-saga/effects';
import handleGetUser  from './saga_handlers/user';
import { GET_USER } from "../actions";

export function* watcherSaga() {
    console.log("received the action");
    yield takeLatest(GET_USER, handleGetUser);
}
