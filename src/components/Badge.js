import React from 'react';

import './styles/ARPage.css'

import batery from '../image/bateria.png';
import arrowL from '../image/arrowLeft.png';
import arrowR from '../image/arrowRigth.png';
import capa from '../image/capas.png';
import lock from '../image/lock.png';
// import logo from "../image/logoAR.png";
import menu from '../image/menu.png';
import iphone from '../image/menuIphone.png';
import next from '../image/next.png';
import option from '../image/option.png';
import share from '../image/share.png';
import wifi from '../image/wifi.png';
import zoom from '../image/zoom.png'

class Badge extends React.Component {
  render() {
    return <div className="border-phone">
    <div className="components-phone">
        <div className="space-components"></div>
        <img className="icons" src={wifi} width="13px" alt="icono de wifi" />
        <img className="icons" src={batery} width="25px" alt="icono de bateria" />
    </div>
    <div className="navigator-page">
        <img className="icons" src={lock} width="15px" alt="icono de seguridad" />
        <p>https://{this.props.nombreMarca}.com</p>
        <img className="icons" src={next} width="20px" alt="icono de recargar" />
    </div>
    <div className="content-page">
            <div className="cabecera-menu">
                <h1>
                  {this.props.nombreMarca}
                </h1>
                <div className="space-cabecera"></div>
                <img src={menu} width="30px" alt="icono del menu" />
            </div>
            <div className="product-name">
                <h3>
                  {this.props.nombreProducto}
                </h3>
            </div>
            <div className="product">
              <div className="image-producto">
                <img src={arrowL} width="15px" alt="icono antes" />
                <div className="icons-center"><img src={zoom} width="25px" alt="icono antes" /></div>
                <img src={arrowR} width="15px" alt="icono despues" />
              </div>
              <div className="vistas-product">
               <div className="vista"></div>
               <div className="vista"></div>
               <div className="vista"></div>
               <div className="vista"></div>
               <div className="vista"></div>
              </div>
            </div>
            <div className="value-product">
                <div className="precio">
                  <p><strong>$</strong></p>
                  <p>{this.props.precioProducto}</p>
                </div>
                <input className="option" type="button" value="Comprar"></input>
                <input className="option" type="button" value="VerAR"></input>
            </div>
            <div className="attributes-product">
                <h3>Description</h3>
                <p> 
                {this.props.descripcionProducto} 
                </p>
            </div>

        </div>
        <div className="menu-safari">
            <img className="icon-safari" src={arrowL} width="40px" alt="icono anterior" />
            <img className="icon-safari" src={arrowR} width="40px" alt="icono siguiente" />
            <img className="icon-safari" src={share} width="40px" alt="icono de compartir" />
            <img className="icon-safari" src={option} width="40px" alt="icono de options" />
            <img className="icon-safari" src={capa} width="40px" alt="icono de capas" />
        </div>
        <div className="menu-iphone">
            <img src={iphone} width="120px" alt="icono menu de iphone" />
        </div>
</div>
    
  }
}

export default Badge;
