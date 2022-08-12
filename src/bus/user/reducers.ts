// Types
import * as types from './types';

export const setUser: types.BaseContact<any> = (state, action) => {
    return action.payload;
};

export const setToken: types.BaseContact<string> = (state, action) => {
    if (state) {
        state.token = action.payload;
    }

    return state;
};

