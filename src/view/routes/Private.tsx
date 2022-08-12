// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { KeyInfo } from '../components/SignUp/KeyInfo';

// Pages
import * as Pages from '../pages';

// Tools
import * as book from './book';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Main /> }
                path = { book.ROOT }
            />
            <Route
                element = { <KeyInfo /> }
                path = { book.INFO }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.ROOT }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
