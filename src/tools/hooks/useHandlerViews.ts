/* eslint-disable array-callback-return */
import { useViews } from '../../bus/views';

export const useHanlderViews = () => {
    const { views } = useViews();

    const viewsArray = (date: string) => {
        return views?.filter((view) => view.createdAt.includes(date));
    };

    const getCountries = (date?: string) => {
        const viewsArray = date ? views?.filter((view) => view.createdAt.includes(date)) : views;
        const countryArray: any = [];
        const countryObject : any = [];
        viewsArray?.map((view) => {
            if (!countryArray.flat().includes(view.country)) {
                countryArray.push([ view.country ]);
            }
            if (countryArray.flat().includes(view.country)) {
                countryArray.find((arr : any) => arr[ 0 ] === view.country).push(view.country);
            }
        });
        countryArray.map((arr: any) => {
            return countryObject.push({
                country: arr[ 0 ],
                amount:  arr.length - 1,
            });
        });

        return countryObject;
    };

    return {
        getCountries,
        viewsArray,
    };
};
