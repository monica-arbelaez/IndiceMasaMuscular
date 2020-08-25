import React from 'react'
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
import BasculaIMC from './BasculaIMC';
export default function cuerpocalculo() {
    let miCompontenVer = <VerCalculo altura={12} peso={8}/>
    return (
        <section className="panel-block">
            <article className="columns is-mobile">
                <FormularioCalculo 
                nombres={["oscar", "cristian", "sebastian", "monica", "andrea"]} 
                notas={{nota1:2,nota2:3,nota3:5}}
                html={<input type="number"/>}
                sumarNumeros={(n1,n2) => {
                    let suma = n1 + n2;
                    return suma;
                }}
                miCompontenVer = {miCompontenVer}
                />
                <VerCalculo altura={15} peso={89}/>
                <BasculaIMC/>
            </article>
        </section>
    )
}