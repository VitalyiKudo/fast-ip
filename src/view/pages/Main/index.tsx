// Core
import React, { FC, useEffect } from 'react';
// import { onLoad } from '@mirukai/fast-ip-check';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

// Book
import { useViews } from '../../../bus/views';
import { AdminPanel } from '../../components/AdminPanel';


const Main: FC = () => {
    const { views } = useViews();

    useEffect(() => {
        console.log(views);
    }, []);

    return (
        <Container>
            <AdminPanel />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
