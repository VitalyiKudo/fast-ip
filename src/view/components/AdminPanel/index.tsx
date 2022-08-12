// Core
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useUser } from '../../../bus/user';
import { useHanlderViews } from '../../../tools/hooks/useHandlerViews';
import FlagImage from '../../elements/FlagImage';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const AdminPanel: FC<PropTypes> = () => {
    const { logoutUser, user } = useUser();
    const { setTogglerAction } = useTogglersRedux();
    const [ array, setArray ] = useState([ 0, 0 ]);
    const [ date, setDate ] = useState(moment()
        .format('DD/MM/YYYY'));

    const { viewsArray, countriesArray } = useHanlderViews(date);

    const logout = (username: any) => {
        logoutUser(username);
        setTogglerAction({ type: 'isLoggedIn', value: false });
    };

    useEffect(() => {
        setDate(moment().subtract(array[ 0 ], 'day')
            .add(array[ 1 ], 'day')
            .format('DD/MM/YYYY'));
    }, [ array ]);

    const reduceDate = () => {
        const newArray = [ ...array ];

        newArray[ 1 ] -= 1;

        return setArray(newArray);
    };

    const increaseDate = () => {
        const newArray = [ ...array ];

        newArray[ 1 ] += 1;

        return setArray(newArray);
    };

    return (
        <S.Container>
            <main>
                <div className = 'date'>
                    <button onClick = { reduceDate }>←</button>
                    <h1>{date}</h1>
                    <button onClick = { increaseDate }>→</button>
                </div>
                <button onClick = { () => logout(user?.username) }>Logout</button>
                <p className = 'views-info'>Total visitors:<span> {viewsArray?.length}</span></p>
                <h1 className = 'country-heading'>Current visitors locations</h1>
                <div className = 'country-info'>
                    {countriesArray.map((stat: any, index: any) => {
                        return (
                            <div
                                className = 'country-container'
                                key = { index }>
                                <h2><FlagImage index = { stat.country }/><p>{stat.amount}</p></h2>
                            </div>
                        );
                    })}
                </div>
            </main>
        </S.Container>
    );
};
