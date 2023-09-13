import {all, call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_USER_LIST, function* ({data}) {
            const result = yield call(API.getUsers, data);
            console.log("[saga users]", result)
            if(result){
                yield put(Action.Creators.updateState({
                    result
                }))
            }
        })
    ])
}

export default saga;