// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { SingIn } from '../../components/SingIn';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Login: FC<PropTypes> = () => {
    return (
        <S.Container>
            <SingIn />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Login />
    </ErrorBoundary>
);
