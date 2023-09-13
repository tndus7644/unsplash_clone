import {createActions, createReducer} from "reduxsauce";

const initialState = {
    list:[],
    topics:{
        owners:[],
        top_contributors:[]
    }
}

export const Action = createActions({
    updateState: ['props'],
    listTopics:['data'],
    getTopics:['slug']
}, {
    prefix: 'TOPIC/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});