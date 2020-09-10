import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import firma from '../image/firmaCristian.png';
import instagram from '../image/instagram.png';
import github from '../image/github.png';

class Navbar extends React.Component {
  render() {
    return <div className="footerComponent">
    <div className="footer">
  
      <p>Diseñado y desarrollado por</p>
      <Link to="/">
        <img className="firma" src={firma} alt="firma de Cristian" />
      </Link>
      <span className="arroba">@entornoInteractivo</span>
      <span className="socialMedia">
        <a href="https://www.instagram.com/entornointeractivo/?hl=es-la"><img src={instagram} className="iconContact" width="30px" alt="logo de instagram"/></a>
        <a href="https://github.com/entornoInteractivo"><img className="iconContact" src={github} width="30px" alt="Logo de github"/></a>
      </span>

      </div>
    </div>
  }
}

export default Navbar;
