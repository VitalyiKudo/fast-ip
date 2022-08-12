// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type User = {
    username: string,
    key: string,
    token?: string | undefined,
    error: any,
}

export type AuthUser = {
    username: string,
    password: string,
}

export type CreateUser = {
    username: string,
    password: string,
    key:      string,
}

export type UserState = User | null

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>
