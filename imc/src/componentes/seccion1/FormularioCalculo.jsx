import React from 'react'
import PropTypes from 'prop-types'
import VerCalculoIMC from './VerCalculoIMC';

function FormularioCalculo(props) {
    console.log(props);
    let {
        nombres
    } = props;

    console.log("la suma es = ",props.sumarNumeros(2,3));
    return (
        <div className="column">
            <label htmlFor="peso">Peso (kilos)</label>
            {props.html}
            <input type="number" name="peso" id="peso" className="caja_texto"/>
            <br/>
            <label htmlFor="">Altura (cm)</label>
            <input type="number" name="altura" id="altura" className="caja_texto"/>
            <ul id="lista">
            {nombres.map((nombre,index) => {
                return <li key={index}>{nombre}</li>
            })}
            </ul>
        </div>
    )
}

FormularioCalculo.propTypes = {
    html : PropTypes.element.isRequired,
    nombres : PropTypes.array.isRequired,
    notas : PropTypes.object.isRequired,
    sumarNumeros : PropTypes.func.isRequired
}

export default FormularioCalculo
