// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useStatSaga } from './saga';

export const useStat = () => {
    const { fetchStat } = useStatSaga();
    const stat = useSelector((state) => state.stat); // Add stat to ./src/init/redux/index.ts

    useEffect(() => {
        fetchStat();
    }, []);

    return {
        fetchStat,
        stat,
    };
};
