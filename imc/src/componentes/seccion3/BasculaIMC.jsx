import React from 'react'
import bascula from '../../imagenes/bascula-dibujo.png';
function BasculaIMC() {
    return (
        <div className="column">
            <img src={bascula} alt="Imagen de bascula" id="img_bascula"/>
        </div>
    )
}

export default BasculaIMC