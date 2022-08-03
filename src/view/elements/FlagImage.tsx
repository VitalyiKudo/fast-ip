import React, { FC } from 'react';

type PropTypes = {
    index: string
}

const FlagImage: FC<PropTypes> = ({ index }) => {
    let link = `https://allianceone.coop/files/assets/default/images/iso-country-flags/png-country-4x3/res-640x480/${index.toLocaleLowerCase()}.png`;

    if (link === '') {
        return <p>{index}</p>;
    }

    return (
        <img
            alt = 'flag'
            src = { link }
        />
    );
};

export default FlagImage;
