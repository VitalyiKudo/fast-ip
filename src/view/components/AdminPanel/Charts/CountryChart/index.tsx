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

    const modeHandler = (direction: string) => {
        mode === 'During all time' && direction === 'r' ? setMode('During this day') : null;
        mode === 'During all time' && direction === 'l' ? setMode('During this year') : null;
        mode === 'During this day' && direction === 'r' ? setMode('During this mounth') : null;
        mode === 'During this day' && direction === 'l' ? setMode('During all time') : null;
        mode === 'During this mounth' && direction === 'r' ? setMode('During this year') : null;
        mode === 'During this mounth' && direction === 'l' ? setMode('During this day') : null;
        mode === 'During this year' && direction === 'r' ? setMode('During all time') : null;
        mode === 'During this year' && direction === 'l' ? setMode('During this mounth') : null;
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
                <button onClick = { () => modeHandler('l') }>←</button>
                <h2>{mode}</h2>
                <button onClick = { () => modeHandler('r') }>→</button>
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
