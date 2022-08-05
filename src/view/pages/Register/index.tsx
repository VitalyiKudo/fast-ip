// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';
import { SignUp } from '../../components/SignUp';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Register: FC<PropTypes> = () => {
    return (
        <S.Container>
            <SignUp />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);
