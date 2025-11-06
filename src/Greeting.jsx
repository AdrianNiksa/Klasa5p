import React from 'react';

const Greeting = (props) => {
    return (
        <div>
            <h3>czesc, {props.imie} - {props.wiek}</h3>
        </div>
    );
};

export default Greeting;