import React, {useEffect, useState} from 'react';

const LicznikZprogiem = () => {
    const [licznik, setLicznik ] = useState(0);
    const [komunikat, setKomunikat] = useState("");
    useEffect(() => {
        if(licznik > 10){
            setKomunikat("Przekroczono limit klkniec");
        }else{
            setKomunikat("")
        }
    }, [licznik]);
    return (
        <div>
            <h2>Licznik z progiem</h2>
            <button onClick={()=>setLicznik(prev=>prev + 1)}>Zwieksz</button>
            {
                komunikat && <p style={{color: "red"}} > {komunikat}</p>
            }
        </div>
    );
};
export default LicznikZprogiem;