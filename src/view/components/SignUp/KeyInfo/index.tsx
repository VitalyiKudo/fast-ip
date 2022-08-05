// Core
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

export const KeyInfo: FC = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const submit = () => {
        navigate('/');
    };

    return (
        <S.Container>
            <h1>Your unique key is {user?.key}</h1>
            <p>do not share your key with anyone</p>
            <button onClick = { submit }>Go to statistic</button>
        </S.Container>
    );
};
