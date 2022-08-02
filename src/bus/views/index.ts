// Core
// import { useEffect } from 'react';

// Tools
import { useEffect } from 'react';
import { useSelector } from '../../tools/hooks';
import { useViewsSaga } from './saga';

// Saga
// import { useViewsSaga } from './saga';

export const useViews = () => {
    const { fetchViews } = useViewsSaga();
    const views = useSelector((state) => state.views); // Add views to ./src/init/redux/index.ts

    useEffect(() => {
        fetchViews();
    }, []);

    return {
        views,
    };
};
