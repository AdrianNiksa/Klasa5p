import React, {useEffect} from 'react';

const Informacje = ({wiadomosc}) => {
    useEffect(() => {
        console.log(wiadomosc)
    }, [wiadomosc]);
    return (
        <div>
            <h2>Nowa wiadomosc: {wiadomosc}</h2>
        </div>
    );
};

export default Informacje;