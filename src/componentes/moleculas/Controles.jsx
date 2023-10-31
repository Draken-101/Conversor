import React, { useState } from 'react';
import Entrada from '../atomos/Entrada';
import Etiqueta from '../atomos/Etiqueta';
import Seleccion from '../atomos/Seleccion';
import Boton from '../atomos/Boton';

function Controles({ vM }) {
  const [val, setVal] = useState('');
  const [conversion, setConversion] = useState('');
  const [moneda1, setMoneda1] = useState('');
  const [moneda2, setMoneda2] = useState('');

  const guardarDatoEntrada = (t) => {
    if (t.target.value === '') {
      setConversion('');
    } else {
      setVal(t.target.value);
    }
  }

  const validarDatoEntrada = () => {
    const v = /^[0-9.]+$/;
    if (val === "") {
      setConversion('');
    } else {
      if (v.test(val)) {
        convertir();
      } else {
        setConversion('Entrada no válida. Por favor, ingrese un número válido.');
      }
    }
  }
  const setM1 = (m) => {
    if (m.target.value !== '') {
      setConversion("");
      setMoneda1(m.target.value);
    } else {
      setConversion("Ingrese una moneda para transformar");
    }
  }
  const setM2 = (m) => {
    if (m.target.value !== '') {
      setConversion("");
      setMoneda2(m.target.value);
    } else {
      setConversion("Ingrese una moneda para transformar");
    }
  }

  const convertir = () => {
    console.log(val);
    console.log(moneda1);
    console.log(moneda2);
    if (moneda1 && moneda2) {
      setConversion(`$ ` + (val * moneda1) / moneda2);
    }
  }

  return (
    <div className="Controles">
      <Entrada oc={guardarDatoEntrada} ob={guardarDatoEntrada} />
      <div className='E'>
        <Etiqueta v={conversion} />
      </div>
      <Seleccion dV={vM} oc={setM1}/>
      <Seleccion dV={vM} oc={setM2}/>
      <Boton t={"Convertir"} oc={validarDatoEntrada} />
    </div>
  );
}

export default Controles;
