import styled from "styled-components";

const B = styled.button`
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    font-weight:bold;
    outline: none;
    width: 40%;
    height: 45px;
    padding: 5px;
    color: black;
    transition: .5s;
    cursor: pointer;
    font-size: 20px;
    margin-top: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover{
        background-color: gainsboro;
    }
`;

function Boton({t, oc}){
    return(
        <B onClick={oc}>{t}</B>
    );
}

export default Boton