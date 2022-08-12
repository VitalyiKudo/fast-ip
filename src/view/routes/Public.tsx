// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
                element = { <Pages.Login /> }
                path = { book.LOGIN }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.LOGIN }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
