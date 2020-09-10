import React from 'react';

import './styles/stylesForm.css'

class BadgeForm extends React.Component {
  state = {
    // nombreMarca: "iobbu",
    // nombreProducto: "Servicio web para marca",
    // precioProducto: "$50.000",
    // descripcionProducto: "rapido, seguro, independiente"
  }
  handleClick = e => {
    console.log('Button was clicked');
  };

  //handleSubmit = e => {
  //  e.preventDefault();
  //  console.log('Form was submitted');
  //  console.log(this.state);
  //};

  // props.onChange = (e) => {
  //   console.log({
  //     // className: e.target.className,
  //     // name: e.target.name,
  //     // value: e.target.value
  //   });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Mira tu pagina con Realidad Aumentada</h1>

        <form className="containerForm" onSubmit={this.props.onSubmit}>
          <label className="etiqueta">Nombre de tu marca o empresa</label>
          <input 
          onChange={this.props.onChange} 
          className="formSpace" 
          type="text" 
          name="nombreMarca" 
          placeholder="Nombre de tu marca"
          value={this.props.formValues.nombreMarca} />

          <label className="etiqueta">Referencia o Nombre de tu producto</label>
          <input 
          onChange={this.props.onChange} 
          className="formSpace" 
          type="text" 
          name="nombreProducto" 
          placeholder="Nombre del producto"
          value={this.props.formValues.nombreProducto} />
          
          <label className="etiqueta">Precio de tu producto</label>
          <input
          onChange={this.props.onChange} 
          className="formSpace" 
          type="text" 
          name="precioProducto" 
          placeholder="Precio del producto"
          value={this.props.formValues.precioProducto} />

          <label className="etiqueta">Describe tu producto</label>
          <input
          onChange={this.props.onChange}  
          className="formSpaceDescription" 
          type="text" 
          name="descripcionProducto" 
          placeholder="Describe el producto"
          value={this.props.formValues.descripcionProducto} />

          <p>*Menciona 3 palabras que describan tu producto separadas con (,)</p>

          <button onClick={this.handleClick} className="submit" type="botton">ENVIAR</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
