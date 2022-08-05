// Core
// import { useEffect } from 'react';

// Tools
import { useEffect } from 'react';
import { useSelector } from '../../tools/hooks';
import { useUserSaga } from './saga';

// Saga
// import { useUserSaga } from './saga';

export const useUser = () => {
    const { createUser } = useUserSaga();
    const user = useSelector((state) => state.user); // Add user to ./src/init/redux/index.ts

    useEffect(() => {
        // fetchUser();
    }, []);

    return {
        createUser,
        user,
    };
};
