import {createActions, createReducer} from "reduxsauce";

const initialState = {

}

export const Action = createActions({
    updateState: ['data'],
    getUserList:['data']
}, {
    prefix: 'USER/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE] : (state, {props}) => ({
        ...state,
        ...props
    })
});