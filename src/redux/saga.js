import {all, call} from 'redux-saga/effects'
import appSaga from './app/saga';
import topicSaga from './topic/saga';
import photoSaga from './photo/saga';
import collectionSaga from './collectionsPhoto/saga';
import searchSaga from './search/saga';
import topicPhotoSaga from './topicPhoto/saga';
import userSaga from './user/saga';

function* sagas() {
    yield all ([
        call(appSaga),
        call(topicSaga),
        call(photoSaga),
        call(searchSaga),
        call(collectionSaga),
        call(topicPhotoSaga),
        call(userSaga)
    ])
}

export default sagas;