import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';

import gitHero from '../image/gifHero.gif'
import buttonGif from '../image/Boton.gif'

class Home extends React.Component {
  render () {
    return <React.Fragment>
      <div className="FlexHome">
        <div className="col1">
          <h1>Mira tu página con Realidad Aumentada</h1>
          <Link to="/feed">
            <button className="buttonNew">VAMOS</button>
          </Link>
        </div>
        <div className="col2">
            <img src={gitHero}/>
        </div>
      </div>

    </React.Fragment>
  }
}

export default Home;
