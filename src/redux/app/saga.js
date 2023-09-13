import {all, call, put, takeLatest} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_USER_LIST, function* ({data}) {
            const result = yield call(API.getUsers, data);
            console.log("[saga users] ", result)
            yield put(Action.Creators.updateState({
                users: result
            }))
        })
    ])
}

export default saga;