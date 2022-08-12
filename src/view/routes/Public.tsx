// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SingIn } from '../components/SingIn';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Register /> }
                path = { book.REGISTER }
            />
            <Route
                element = { <SingIn /> }
                path = { book.LOGIN }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.REGISTER }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
