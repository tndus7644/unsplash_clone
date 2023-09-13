import {all, takeLatest, call, put} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.TOPIC_PHOTO, function* ({slug, data}){
            console.log(slug);
            const result = yield call(API.getTopicPhoto, slug, data)
            console.log("[saga getTopicPhoto]", result)
            if(result){
                yield put(Action.Creators.updateState({
                    getTopicPhoto: result
                }))
            }
        })
    ])
}

export default saga;