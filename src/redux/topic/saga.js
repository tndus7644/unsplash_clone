import {all, takeLatest, call, put} from "redux-saga/effects";
import {Action} from './redux'
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.LIST_TOPICS, function* ({data}) {
            const result = yield call(API.listTopics, data);
            console.log("[saga listTopics]", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    list: result
                }))
            }
        }),
        takeLatest(Action.Types.GET_TOPICS, function* ({slug}){
            const result = yield call(API.getTopics, slug);
            console.log("[saga getTopics]", result)
            if(result){
                yield put(Action.Creators.updateState({
                    topics: result
                }))
            }
        })
    ])
}

export default saga;