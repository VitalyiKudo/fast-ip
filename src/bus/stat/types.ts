// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Stat = Array<any>
export type StatState = Stat | null

// Contracts
export type BaseContact<T = any> = CaseReducer<StatState, PayloadAction<T>>
