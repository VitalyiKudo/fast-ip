// Corel
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';
import { useUser } from '../../bus/user';
import { clearCookie, getCookie } from '../../tools/utils/cookieHandler';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }, setTogglerAction } = useTogglersRedux();
    const { fetchUser } = useUser();

    useEffect(() => {
        console.log(document.cookie);
        if (document.cookie !== '') {
            setTogglerAction({ type: 'isLoggedIn', value: true });
            fetchUser();
        }
    }, [ document.cookie ]);

    return (
        <Suspense fallback = { <div>Spinner</div> }>
            {
                isLoggedIn
                    ? <Private />
                    : <Public />
            }
        </Suspense>
    );
};
