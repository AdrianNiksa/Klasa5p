import React from 'react';
import Button from "./stylizowanie/Button.jsx";
import ButtonStyled from "./stylizowanie/ButtonStyled.jsx";
import Welcome from "./stylizowanie/Welcome.jsx";



const App = () => {
    return (
        <div>
            <Button/>
            <ButtonStyled/>
            <Welcome/>
            <h1>Plik zosta zmieniony</h1>
        </div>
    );
};

export default App;