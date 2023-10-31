import styled from 'styled-components'

const L = styled.div`
    padding: 12px;
    font-size: 15px;
    text-align: justify;
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

function Etiqueta({v, oc}){
    return(
        <L onChange={oc}>{v}</L>
    );
}

export default Etiqueta;