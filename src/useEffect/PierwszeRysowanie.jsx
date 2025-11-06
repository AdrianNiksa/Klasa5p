import React, {useEffect} from 'react';

const PierwszeRysowanie = () => {
    useEffect(() => {
        console.log('Komponent zostal urychomiony  tylko raz')
    }, []);
    return (
        <div>
            <h2>Pierwsze rysowanie</h2>
        </div>
    );
};

export default PierwszeRysowanie;