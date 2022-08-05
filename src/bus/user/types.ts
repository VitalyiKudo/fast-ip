// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type User = {
    userName: string,
    password: string,
    key: string,
}
export type UserState = User | null

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>
