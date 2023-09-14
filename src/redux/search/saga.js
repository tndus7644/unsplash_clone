import {all, takeLatest, put, call, select} from "redux-saga/effects";
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
        takeLatest(Action.Types.SEARCH_MORE_PHOTOS, function* ({data}) {
            const {search} = yield select();
            // if (search.photos?.results?.length > 0) {
            //     const currentPage = search.currentPage + 1;
            //     const result = yield call(API.searchPhotos, {
            //         ...data,
            //         page: currentPage,
            //         per_page: 12,
            //     })
            //     console.log("[saga morePhotos]", result)
            //     if (result) {
            //         yield put(Action.Creators.updateState({
            //             photos: {
            //                 ...search.photos,
            //                 results: [
            //                     ...search.photos.results,
            //                     ...result.photos.results
            //                 ]
            //             },
            //             currentPage
            //         }))
            //     }
            // }
        }),
    ])
}

export default saga;