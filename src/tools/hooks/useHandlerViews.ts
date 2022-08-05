/* eslint-disable array-callback-return */
import { useViews } from '../../bus/views';

export const useHanlderViews = (date: string) => {
    const { views } = useViews();

    const viewsArray = views?.filter((view) => view.createdAt === date);

    const getCountries = () => {
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

    const countriesArray = getCountries();

    return {
        countriesArray,
        viewsArray,
    };
};
