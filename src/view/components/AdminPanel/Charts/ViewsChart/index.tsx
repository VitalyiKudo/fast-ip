// Core
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// Bus
import { useHanlderViews } from '../../../../../tools/hooks/useHandlerViews';

// Styles
import * as S from './styles';

export const ViewsChart = () => {
    const [ array, setArray ] = useState([ 0, 0 ]);

    const [ date, setDate ] = useState([ '' ]);
    useEffect(() => {
        setDate([
            moment()
                .subtract(array[ 1 ] + 5, 'day')
                .add(array[ 0 ], 'day')
                .format('DD MMM YYYY'),
            moment()
                .subtract(array[ 1 ] + 4, 'day')
                .add(array[ 0 ], 'day')
                .format('DD MMM YYYY'),
            moment()
                .subtract(array[ 1 ] + 3, 'day')
                .add(array[ 0 ], 'day')
                .format('DD MMM YYYY'),
            moment()
                .subtract(array[ 1 ] + 2, 'day')
                .add(array[ 0 ], 'day')
                .format('DD MMM YYYY'),
            moment()
                .subtract(array[ 1 ] + 1, 'day')
                .add(array[ 0 ], 'day')
                .format('DD MMM YYYY'),
            moment()
                .subtract(array[ 1 ], 'day')
                .add(array[ 0 ], 'day')
                .format('DD MMM YYYY'),
        ]);
    }, [ array ]);

    const { viewsArray } = useHanlderViews();

    const dataArray = [
        viewsArray(date[ 0 ])?.length,
        viewsArray(date[ 1 ])?.length, viewsArray(date[ 2 ])?.length,
        viewsArray(date[ 3 ])?.length, viewsArray(date[ 4 ])?.length,
        viewsArray(date[ 5 ])?.length,
    ];

    const reduceDate = () => {
        const newArray = [ ...array ];

        newArray[ 1 ] += 6;

        return setArray(newArray);
    };

    const increaseDate = () => {
        const newArray = [ ...array ];

        newArray[ 0 ] += 6;


        return setArray(newArray);
    };

    return (
        <S.Container>
            <div className = 'date'>
                <button onClick = { reduceDate }>←</button>
                <h1>Statistics by day</h1>
                <button
                    disabled = { date[ 5 ] === moment().format('DD MMM YYYY') }
                    onClick = { increaseDate }>→
                </button>
            </div>
            <ReactApexChart
                height = { 600 }
                options = {{
                    colors: [ '#ff0000' ],
                    xaxis:  {
                        categories: [
                            date[ 0 ] ? date[ 0 ].slice(0, 7) : null,
                            date[ 1 ] ? date[ 1 ].slice(0, 7) : null,
                            date[ 2 ] ? date[ 2 ].slice(0, 7) : null,
                            date[ 3 ] ? date[ 3 ].slice(0, 7) : null,
                            date[ 4 ] ? date[ 4 ].slice(0, 7) : null,
                            date[ 5 ] ? date[ 5 ].slice(0, 7) : null,
                        ],
                    },
                }}
                series = { [
                    {
                        name: 'Company1',
                        data: dataArray,
                    },
                ] }
                type = 'bar'
            />
        </S.Container>
    );
};
