import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const MAKE = 'ball/MAKE';

export const make = createAction(MAKE);

// init state
const initialState = Map({
    balls: List([])
});

export default handleActions({
    [MAKE]: (state, action) => {
        return state.set('balls', action.payload);
    }
}, initialState);