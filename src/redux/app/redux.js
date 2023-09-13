import {createActions, createReducer} from "reduxsauce";

const initialState = {
    sidebar: false,
    dropdown: false,
    popup:false
}

export const Action = createActions({
    updateState: ['props'],
    getUserList:['data']
}, {
    prefix: 'APP/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});