import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const MAKE = 'ball/MAKE';
const MAKELOOP = 'ball/MAKELOOP';

export const make = createAction(MAKE);
export const makeLoop = createAction(MAKELOOP);
// init state
const initialState = Map({
    balls: List([])
});

export default handleActions({
    [MAKE]: (state, action) => {
        return state.set('balls', action.payload);
    },
    [MAKELOOP]: (state, action) => {
        return state.set('balls', action.payload);
    },
}, initialState);