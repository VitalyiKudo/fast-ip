// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const statSlice = createSlice<types.StatState, typeof reducers>({
    name: 'stat',
    initialState,
    reducers,
});

export const sliceName = statSlice.name;
export const statActions = statSlice.actions;
export default statSlice.reducer;
