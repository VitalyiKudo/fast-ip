// Core
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// Bus
import { useHanlderViews } from '../../../../../tools/hooks/useHandlerViews';

// Styles
import * as S from './styles';

export const CountryChart = () => {
    const { getCountries } = useHanlderViews();
    const [ date, setDate ] = useState('');
    const [ mode, setMode ] = useState('During all time');

    const countryStat = getCountries(date);

    const labels = countryStat.map((stat: any) => stat.country);
    const series = countryStat.map((stat: any) => stat.amount);
    // const images = countryStat.map((index: any) => `https://allianceone.coop/files/assets/default/images/iso-country-flags/png-country-4x3/res-640x480/${index.country.toLocaleLowerCase()}.png`);

    const modeHandler = () => {
        mode === 'During all time' ? setMode('During this day') : null;
        mode === 'During this day' ? setMode('During this mounth') : null;
        mode === 'During this mounth' ? setMode('During this year') : null;
        mode === 'During this year' ? setMode('During all time') : null;
    };

    useEffect(() => {
        switch (mode) {
            case 'During all time':
                setDate('');
                break;
            case 'During this day':
                setDate(moment().format('DD MMM YYYY'));
                break;
            case 'During this mounth':
                setDate(moment().format('MMM YYYY'));
                break;
            case 'During this year':
                setDate(moment().format('YYYY'));
                break;
            default:
                break;
        }
    }, [ mode ]);

    return (
        <S.Container>
            <h1 className = 'country-heading'>Current visitors locations</h1>
            <div className = 'button-section'>
                <button>←</button>
                <h2>{mode}</h2>
                <button onClick = { modeHandler }>→</button>
            </div>
            <ReactApexChart
                height = { 600 }
                options = {{
                    chart: {
                        type: 'donut',
                    },
                    labels:     labels,
                    responsive: [
                        {
                            breakpoint: 480,
                            options:    {
                                chart: {
                                    width: 150,
                                },
                                legend: {
                                    position: 'bottom',
                                },
                            },
                        },
                    ],
                }}
                series = { series }
                type = 'donut'
            />
        </S.Container>
    );
};
