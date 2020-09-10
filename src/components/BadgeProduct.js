import React from 'react';
import firebase from 'firebase';

import './styles/ARPageProducto.css'

import batery from '../image/bateria.png';
import arrowL from '../image/arrowLeft.png';
import arrowR from '../image/arrowRigth.png';
import capa from '../image/capas.png';
import lock from '../image/lock.png';
import iphone from '../image/menuIphone.png';
import next from '../image/next.png';
import option from '../image/option.png';
import share from '../image/share.png';
import wifi from '../image/wifi.png';

import ImageBackground from '../image/coffeBack.jpg';

import shoes from '../image/shoes.png'

const imageFondo= {
    backgroundImage : "url("+ ImageBackground +")",
}

class BadgeProduct extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          picture: null,
      }
      this.handleUpload = this.handleUpload.bind(this);
  }

  
  handleUpload = (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/fotosProductos/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
            uploadValue: percentage,
        });
    }, error => {
        console.log(error.message)
    }, () => {

        this.setState({
            uploadValue: 100,
            picture: task.snapshot.downloadURL,   
        });
    });        
}

  render() {
    return <React.Fragment>
    
    <div className="experienceProduct">
        <div className="subeProducto">

            <p>Sube tu producto</p><br/>
                <label htmlFor="subirFoto" className="subir">
                    +
                </label>
                <input id="subirFoto" className="display-none" type="file" accept=".png" onChange={ this.handleUpload } /><br/>
        </div>

        <div className="border-phone">
        <div className="components-phone">
            <div className="space-components"></div>
                <img className="icons" src={wifi} width="13px" alt="icono de wifi" />
                <img className="icons" src={batery} width="25px" alt="icono de bateria" />
            </div>
        <div className="navigator-page">
            <img className="icons" src={lock} width="15px" alt="icono de seguridad" />
            <p>https://{this.props.marca}AR.com</p>
            <img className="icons" src={next} width="20px" alt="icono de recargar" />
        </div>
        <div style={imageFondo} className="content-page">
            <div className="container-flex-cell">
                <div className="container-center-cell">

                    <div className="profile-image">
                        <img  width="200px" src={shoes} alt="" />
                    </div>
                    
                </div>
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
    </div>
    
        
    </React.Fragment>
    
  }
}

export default BadgeProduct;