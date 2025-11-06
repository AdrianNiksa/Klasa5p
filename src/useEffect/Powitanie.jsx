import React, {useEffect, useState} from 'react';

const Powitanie = () => {
    const [tekst, setTekst] = useState("");
    useEffect(() => {
        console.log('Komponent ostał wyrenderowany')
    });
    return (
        <div>
            <h2>Powitanie {tekst}</h2>
            <button onClick={()=>setTekst("Hello")}>Hello</button>
        </div>
    );
};

export default Powitanie;