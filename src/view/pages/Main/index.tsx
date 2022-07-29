// Core
import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onLoad } from '@mirukai/fast-ip-check';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

// Book
import { LESSON1 } from '../../routes/book';

const Main: FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        onLoad();
    }, []);

    return (
        <Container>
            <p>Page: Main</p>
            <button onClick = { () => navigate(LESSON1) }>Lesson 1</button>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
