import {createActions, createReducer} from "reduxsauce";

const initialState = {
    getTopicPhoto:[]
}

export const Action = createActions({
    updateState: ['props'],
    topicPhoto:['slug', 'data']
}, {
    prefix: 'TOPIC_PHOTO/'
})

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});