import React from 'react';

import './styles/stylesForm.css'

class BadgeForm extends React.Component {

  render() {
    return (
      <div>
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

          <label className="etiqueta">Escribe tu email</label>
          <input
          onChange={this.props.onChange}  
          className="formSpace" 
          type="email" 
          name="email" 
          placeholder="E-mail"
          value={this.props.formValues.email} />

          <label className="etiqueta">Describe tu producto</label>
          <textarea
          onChange={this.props.onChange}  
          className="formSpaceDescription"  
          name="descripcionProducto" 
          placeholder="Describe el producto"
          value={this.props.formValues.descripcionProducto} />

          <p>*Describe brevemente tu producto.</p>

          <button onClick={this.handleClick} className="submit" type="botton">ENVIAR</button>

          {this.props.error && <p>{this.props.error.message}</p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
