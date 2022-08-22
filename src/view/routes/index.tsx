// Corel
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';
import { useUser } from '../../bus/user';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }, setTogglerAction } = useTogglersRedux();
    const { fetchUser } = useUser();

    useEffect(() => {
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
