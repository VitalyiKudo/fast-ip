// Core
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import { useHanlderViews } from '../../../tools/hooks/useHandlerViews';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const AdminPanel: FC<PropTypes> = () => {
    const [ array, setArray ] = useState([ 0, 0 ]);
    const [ date, setDate ] = useState(moment()
        .format('DD/MM/YYYY'));

    const { viewsArray, countriesArray } = useHanlderViews(date);

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
                <div style = {{ display: 'flex' }}>
                    <button onClick = { reduceDate }>-</button>
                    <h1>{date}</h1>
                    <button onClick = { increaseDate }>+</button>
                </div>
                <p>Total views: {viewsArray?.length}</p>
                <p>Views by countries</p>
                {countriesArray.map((stat: any, index: any) => {
                    return (
                        <div key = { index }>
                            <p>Country: {stat.country}</p>
                            <p>Views: {stat.amount}</p>
                        </div>
                    );
                })}
            </main>
        </S.Container>
    );
};
