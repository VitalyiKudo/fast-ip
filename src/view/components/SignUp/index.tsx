// Core
import React, { FC, useState } from 'react';
import { useUser } from '../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const SignUp: FC<PropTypes> = () => {
    const [ userName, setUserName ] = useState('');
    const { createUser } = useUser();
    const [ password, setPassword ] = useState('');

    const submit = (name: string) => {
        createUser({
            userName: name,
            password: password,
            key:      'fewfjpiowe341242',
        });
    };

    return (
        <S.Container>
            <main>
                <h1>Create an account</h1>
                <div className = 'input-section'>
                    <input
                        className = 'name'
                        placeholder = 'name'
                        type = 'text'
                        value = { userName }
                        onChange = { (event) => setUserName(event.target.value) }
                    />
                    <input
                        className = 'password'
                        placeholder = 'password'
                        type = 'password'
                        onChange = { (event) => setPassword(event.target.value) }
                    />
                    <button
                        className = 'submit'
                        onClick = { () => submit(userName) }>Sumbit
                    </button>
                </div>
            </main>
        </S.Container>
    );
};
