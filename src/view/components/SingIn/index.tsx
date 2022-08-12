// Core
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useUser } from '../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const SingIn: FC<PropTypes> = () => {
    const { authUser } = useUser();
    const { setTogglerAction } = useTogglersRedux();
    const navigate = useNavigate();
    const [ username, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');

    const submit = (username: string, password: string) => {
        if (username === '' || password === '') {
            return null;
        }
        authUser({
            username,
            password,
        });
        setTogglerAction({ type: 'isLoggedIn', value: true });

        return navigate('/');
    };

    return (
        <S.Container>
            <main>
                <h1>Sing in to your account</h1>
                <div className = 'input-section'>
                    <input
                        className = 'name'
                        placeholder = 'name'
                        type = 'text'
                        value = { username }
                        onChange = { (event) => setUserName(event.target.value) }
                    />
                    <input
                        className = 'password'
                        placeholder = 'password'
                        type = 'password'
                        value = { password }
                        onChange = { (event) => setPassword(event.target.value) }
                    />
                </div>
                <div className = 'button-section'>
                    <button
                        className = 'submit'
                        onClick = { () => submit(username, password) }>Submit
                    </button>
                    <h1>Don't have an account yet?</h1>
                    <button onClick = { () => navigate('/register') }>Registration</button>
                </div>
            </main>
        </S.Container>
    );
};
