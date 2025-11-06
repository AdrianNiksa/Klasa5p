import React, {useEffect, useState} from 'react';

const Zegar = () => {
    const [czas, setCzas] = useState(new Date().toLocaleDateString);
    useEffect(() => {
        const timer = setInterval(() =>{
            setCzas(new Date().toLocaleDateString());
            console.log('Zegar zostal uruchomionny')
            }
        )
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <h2>Aktualny czas: {czas}</h2>
        </div>
    );
};

export default Zegar;