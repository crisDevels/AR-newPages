import React from 'react'
import api from '../api'

import { Link } from 'react-router-dom'

import '../components/styles/Navbar.css'
import '../global.css'
import './styles/feed.css'
import PagesList from '../components/pagesList.js'


import load from '../image/loader.gif'

class Feed extends React.Component {
   
    state = {
        loading: true,
        error: null,
        data: [],
    }

    componentDidMount() {
        
        console.log("bigData")
        this.fetchData();

        this.intervalID = setInterval(this.fetchData, 5000)

        /* setTimeout(() => {
            this.setState({
                data: [
                    {
                    id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                    nombreMarca : "iobbu",
                    nombreProducto : "Servicios web para marca",
                    precioProducto : "$1'000.000",
                    descripcionProducto : "rápido, seguro, independiente",
                    avatarUrl: 'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
                    },
                    {
                        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                    nombreMarca : "Net540",
                    nombreProducto : "Plataforma del trabajo",
                    precioProducto : "$10.000 x Cupon",
                    descripcionProducto : "Confiable, eficiente, seguro ",
                    avatarUrl: 'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
                    },
                    {
                    id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
                    nombreMarca : "Evergreen",
                    nombreProducto : "Servicios tapiceria para mobiliario",
                    precioProducto : "$400.000",
                    descripcionProducto : "Confort, Elegancia, Duradero",
                    avatarUrl: 'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon'
                    },
                    {
                    id: '63c05386-36a2-4522-9ac1-364ad7bec5e9',
                    nombreMarca : "DADE:Luxury&Home",
                    nombreProducto : "Diseño de interior y mobiliario",
                    precioProducto : "$2'000.000",
                    descripcionProducto : "Personalizado, estetica, buen gusto",
                    avatarUrl: 'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon'
                    },
                ]
            })
        }, 2000) */
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }


    fetchData = async () => {
      this.setState({ loading: true, error: null })
      try {
        const data = await api.Feed.list(); 
        this.setState({ loading: false, data: data })
      }catch(error) {
        this.setState({ loading: false, error: error})    
      }
    }
    
    renderLoad() {
      return (
        <div>
          <img alt="la ilustracion de loader" src={load}/>
        </div>
      )
    }

 render(){

    /* if (this.state.loading) {
        return (
            this.renderLoad()
        )
    } */

    if (this.state.error) {
        return `Error: ${this.state.error.message}`
    }

     return <React.Fragment>
         <div className="heroButton">
         <div className="titleButton">
             <h1>Páginas de mis amigos</h1>
         </div>
         <div className="blockButton">
             <Link to="/Feed/arNew" className="buttonNew">CONSTRUIR MI PÁGINA</Link>
         </div>
         </div>
         <div className="pages_List">
            <div className="container_pages">
                
                <PagesList Feed={this.state.data}/>

            </div>
         </div>
     </React.Fragment>
 }
}

export default Feed;