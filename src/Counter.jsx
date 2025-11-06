import React, {useState} from 'react';

const Counter = () => {
    const [licznik, setLicznik] = useState(0);
    const [tekst, setTekst] = useState("")
    let isLoggedIn = false;
    return (
        <div>
            <button onClick={() => {setLicznik(licznik+1)}}>
                Licznik kliknięć: {licznik}
            </button>
            <input type="text"
                   value={tekst}
                   onChange={(e) => setTekst(e.target.value)}
            />
            <h4>{tekst}</h4>
            <p>{ isLoggedIn ? "Witaj uzytkowniku" : "Zaloguj się"}</p>
        </div>
    );
};

export default Counter;