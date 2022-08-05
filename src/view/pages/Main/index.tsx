// Core
import React, { FC } from 'react';
// import { onLoad } from '@mirukai/fast-ip-check';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import { Container } from './styles';

import { AdminPanel } from '../../components/AdminPanel';


const Main: FC = () => {
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
