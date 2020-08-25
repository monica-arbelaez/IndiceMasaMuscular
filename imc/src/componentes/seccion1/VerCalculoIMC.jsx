
import React from 'react'
import PropTypes from 'prop-types'; 

function VerCalculoIMC(props) {
    let imc = calcularIMC(props);
    return (
        <div className="column">
            <h3>IMC</h3>
            <h3>{imc}</h3>
        </div>
    )
}

function calcularIMC({peso,altura}){
    return peso / altura;
}

VerCalculoIMC.propTypes = {
    peso : PropTypes.number.isRequired,
    altura : function(props, propName, componentName) {
        if(props.altura < 10 || props.altura > 20){
            return new Error(
                'La propiedad `' + propName + '` en el componente' +
                ' `' + componentName + '`. No se encuentra en el rango de  10 - 20.'
              );
        }
    },
};

export default VerCalculoIMC