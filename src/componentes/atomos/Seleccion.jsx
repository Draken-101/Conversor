import "../../assets/estilos/estilos.css"
function Seleccion({dV, oc, ob, of, s}){
    return(
        <>
            <select value={s} onChange={oc} onBlur={ob} onFocus={of} className="I">
                <option value={""}><span style={{}}>Elegir Moneda</span></option>
                <option value={dV[0]}>AMD</option>
                <option value={dV[1]}>AVAX</option>
                <option value={dV[2]}>BGN</option>
                <option value={dV[3]}>BOB</option>
                <option value={dV[4]}>BWP</option>
                <option value={dV[5]}>ETB</option>
                <option value={dV[6]}>GEL</option>
                <option value={dV[7]}>BWP</option>
                <option value={dV[8]}>ETB</option>
                <option value={dV[9]}>GEL</option>
            </select>
        </>
    );
}

export default Seleccion;