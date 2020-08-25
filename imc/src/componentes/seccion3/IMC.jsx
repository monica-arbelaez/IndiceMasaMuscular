import React, { Component } from "react";
import FormularioCalculo from "./FormularioCalculo";
import VerCalculo from "./VerCalculoIMC";

export default class IMC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peso: 0,
      altura: 1,
    };
  }

  render() {
    return (
      <>
      {/* el C_IMC se le va a pasar a forlumarioCalculo
       es el de class IMC donde tento los estados */}
         <FormularioCalculo C_IMC = {this} App = {this.props.App}/>
                <VerCalculo altura={this.state.altura} peso={this.state.peso}/>
      </>
    );
  }
}
