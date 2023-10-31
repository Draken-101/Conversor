import styled from 'styled-components'

const Inp = styled.input`
    width: 40%;
    height: 40px;
    font-size: 20px;
    font-weight:bold;
    border-radius: 5px;
    border: 1px solid black;
    padding: 0 10px;
    outline: none;
    margin: 0 10% 40px 0;
`;

function Entrada({oc, ob, of}){
    return(
        <Inp placeholder='Ingresar valor' onChange={oc} onBlur={ob} onFocus={of}/>
    );
}

export default Entrada;