import {all, takeLatest, put, call} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, function* ({data}) {
            console.log('start searchPhotos saga')
            const result = yield call(API.searchPhotos, data)
            console.log("[saga searchPhotos] ", result)
            if (result) {
                yield put(Action.Creators.updateState({
                    photos: result
                }))
            }
        }),
    ])
}

export default saga;