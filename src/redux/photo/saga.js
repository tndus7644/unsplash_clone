import {all, takeLatest, put, call, select} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

const saga = function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function* ({data}){
            const result = yield call(API.getPhotos, data)
            console.log('[saga getPhotos]', result)
            if(result){
                yield put(Action.Creators.updateState({
                    list : result
                }))
            }
        }),
        takeLatest(Action.Types.GET_MORE_PHOTOS, function* () {
            const {photo} = yield select();
            if (photo.list.length > 0) {
                const currentPage = photo.currentPage + 1;
                const result = yield call(API.getPhotos, {
                    per_page: 12,
                    page: currentPage,
                })
                console.log('[saga getMorePhotos]', result)
                if (result) {
                    yield put(Action.Creators.updateState({
                        list: [
                            ...photo.list,
                            ...result
                        ],
                        currentPage
                    }))
                }
            }
        }),
        takeLatest(Action.Types.GET_PHOTO_BY_ID, function* ({id}){
            yield put(Action.Creators.updateState({
                photoPopup:true,
            }))
            const photoByIdResult = yield call(API.getPhotoById, id);
            console.log('[saga getPhotoById]', photoByIdResult)
            if(photoByIdResult){
                yield put(Action.Creators.updateState({
                    singlePhoto:{
                        ...photoByIdResult,
                    }
                }))
            }
        })
    ])
}

export default saga;