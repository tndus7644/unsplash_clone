import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list: [],
    singlePhoto:{},
    photoPopup:false,
    currentPage: 1
}

export const Action = createActions({
    updateState: ['props'],
    getPhotos: ['data'],
    getMorePhotos:null,
    getPhotoById:['id'],
}, {
    prefix: 'PHOTO/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
