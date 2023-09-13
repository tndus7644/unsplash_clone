import {createActions, createReducer} from "reduxsauce";

const initialState = {
    collection:{
        results:[],
        preview_photos:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    collectionPhoto:['data']
}, {
    prefix: 'COLLECTION/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});
