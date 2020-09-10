import React from 'react';

import ImageBackground from '../image/coffeBack.jpg';

import './styles/ProductoStyle.css';


import BadgeProduct from '../components/BadgeProduct';


const imageDeFondo = {
    backgroundImage : "url("+ ImageBackground +")",
    width: "100%",
    heigth: "100vh"
}

class ProductPage extends React.Component {
    state = {
        form: [],
    }

    render() {
        return <React.Fragment>
            <div style={imageDeFondo} className="background">
                <div className="container-center">
                    <div className="container-flex">
                        < BadgeProduct marca={this.state.form.nombreMarca || 'experiencia'}
                                nombreProducto={this.state.form.nombreProducto || 'Paginas Web Interactivas'}
                                precio={this.state.form.precioProducto || '980.400'}
                                description={this.state.form.descripcionProducto || 'Responsive, Innovador, Seguro'} 
                                />
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default ProductPage;