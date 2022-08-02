// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import * as types from './types';

// Reducers
import * as reducers from './reducers';

const initialState = null;

export const viewsSlice = createSlice<types.ViewsState, typeof reducers>({
    name: 'views',
    initialState,
    reducers,
});

export const sliceName = viewsSlice.name;
export const viewsActions = viewsSlice.actions;
export default viewsSlice.reducer;
