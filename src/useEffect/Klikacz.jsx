import React, {useEffect, useState} from 'react';

const Klikacz = () => {
    const [ilosc, setIlosc] = useState(0);
    useEffect(() => {
        console.log(`Efekt zostal uruchomiony. Klkienito ${ilosc} razy`);
    }, [ilosc]);
    return (
        <div>
            <h2>Klikacz</h2>
            <h3>Kliknieto {ilosc} razy</h3>
            <button onClick={()=>setIlosc(prev => prev + 1)}>Klikacz</button>
        </div>
    );
};

export default Klikacz;