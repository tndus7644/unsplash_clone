import {createActions, createReducer} from "reduxsauce";

const initialState = {
    photos: {},
    collections: {},
    users: {},
    related_searches: [],
    currentPage: 1
}

export const Action = createActions({
    updateState: ['props'],
    searchPhotos: ['data'],
    searchMorePhotos: ['data'],
}, {
    prefix: 'SEARCH_PHOTO/'
});

export default createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {props}) => ({
        ...state,
        ...props
    })
});
