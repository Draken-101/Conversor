import { useEffect, useState } from "react";
import Controles from "../moleculas/Controles";


function Conversor() {
    const [datos, setDatos] = useState('');

    const api = `https://api.currencyapi.com/v3/latest?apikey=cur_live_dw9ykx09Q3vmzeBXgHDfQJ3mf1UzdxubyUqD3LqV`;

    useEffect(() => {
        fetch(api).then(response => {
            if (response.status === 404) { return null; }
            if (!response.ok) { throw new Error('No hay respuesta de la api!!!'); }
            return response.json();
        }).then(datosAPI => {
            setDatos(datosAPI);
        })
    }, [api]);
    const valMonedas = [
        datos.data?.AMD?.value,
        datos.data?.AVAX?.value,
        datos.data?.BGN?.value,
        datos.data?.BOB?.value,
        datos.data?.BWP?.value,
        datos.data?.ETB?.value,
        datos.data?.GEL?.value,
        datos.data?.KPW?.value,
        datos.data?.KES?.value,
        datos.data?.KZT?.value
      ];
    return (
        <div>
            <Controles vM={valMonedas} />
        </div>
    );
}

export default Conversor;