import React from 'react';

const Owoce = () => {
    const fruits = ["jabłko", "banan", "truskawka"];
    return (
        <ul>
            {
                fruits.map(owoc => <li>{owoc}</li>)
            }
        </ul>
    );
};

export default Owoce;