import React from 'react';
import Cabecera from './CabeceraCalculo';
import CuerpoCalculo from './CuerpoCalculo';
function micomponente  () {
    return ( 
        <section className="panel">
            <Cabecera titulo="Calculadora" 
                      nombre_clase="cabecera calculo"/>
            <CuerpoCalculo/>
        </section>
     );
 
}
export default micomponente; 
