// Core
import React, { FC } from 'react';
import { ViewsChart } from './Charts/ViewsChart';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';
import { CountryChart } from './Charts/CountryChart';

// Types
type PropTypes = {
    /* type props here */
}

export const AdminPanel: FC<PropTypes> = () => {
    const { logoutUser, user } = useUser();
    const { setTogglerAction } = useTogglersRedux();

    // const { viewsArray, countriesArray } = useHanlderViews(date);

    const logout = (username: any) => {
        logoutUser(username);
        setTogglerAction({ type: 'isLoggedIn', value: false });
    };

    return (
        <S.Container>
            <main>
                <button
                    className = 'logout'
                    onClick = { () => logout(user?.username) }>Logout
                </button>
                <div>
                    <ViewsChart />
                </div>
                <div>
                    <CountryChart />
                </div>
            </main>
        </S.Container>
    );
};
