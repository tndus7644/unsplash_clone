import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as AppAction} from './app/redux'
import {Action as PhotoAction} from './photo/redux'
import {Action as SearchAction} from './search/redux'

import {Action as TopicAction} from './topic/redux'
import {Action as CollectionsPhoto} from './collectionsPhoto/redux'
import {Action as TopicPhotoAction} from './topicPhoto/redux'
import {Action as UserAction} from './user/redux';

const {dispatch} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const topicActions = bindActionCreators(TopicAction.Creators, dispatch);
export const photoActions = bindActionCreators(PhotoAction.Creators, dispatch);
export const SearchActions = bindActionCreators(SearchAction.Creators, dispatch);
export const collectionsPhotosActions = bindActionCreators(CollectionsPhoto.Creators, dispatch);
export const topicPhotoActions = bindActionCreators(TopicPhotoAction.Creators, dispatch);
export const userActions = bindActionCreators(UserAction.Creators, dispatch);
