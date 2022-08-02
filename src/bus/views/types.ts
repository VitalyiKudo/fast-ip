// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Views = Array<any>
export type ViewsState = Views | null

// Contracts
export type BaseContact<T = any> = CaseReducer<ViewsState, PayloadAction<T>>
