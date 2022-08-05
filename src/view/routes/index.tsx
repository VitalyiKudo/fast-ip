// Core
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }, setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        if (localStorage.getItem('userKey')) {
            setTogglerAction({ type: 'isLoggedIn', value: true });
        }
    }, [ isLoggedIn ]);

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
