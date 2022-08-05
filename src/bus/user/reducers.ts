// Types
import * as types from './types';

export const setUser: types.BaseContact<types.User> = (state, action) => {
    return action.payload;
};
