// connect the request with the rootSage
// call the request function and store the data in redux store

import { call, put } from 'redux-saga/effects';
import { requestGetUser } from '../requests/user';
import { setUser } from "../../actions";

export default function* handleGetUser() {
    try {
        console.log("handleGetUser is working ...");
        const response = yield call(requestGetUser);
        // yeild call means: do nothing until we get the response 
        const { data } = response;
        const { name } = data;
        yield put(setUser(name));

    } catch (error) {
        console.log(error);
    }
}
