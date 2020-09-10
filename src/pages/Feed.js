import React from 'react'

import { Link } from 'react-router-dom'

import '../components/styles/Navbar.css'
import '../global.css'
import './styles/feed.css'
import PagesList from '../components/pagesList.js'

import load from '../image/loader.gif'

class Feed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            results: [],
            },
        
        }
    }

    componentDidMount() {
        
        this.fetchCharacter();
        // setTimeout(() => {
        //     this.setState({
        //         data: [
        //             {
        //             id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
        //             nombreMarca : "iobbu",
        //             nombreProducto : "Servicios web para marca",
        //             precioProducto : "$1'000.000",
        //             descripcionProducto : "rápido, seguro, independiente",
        //             avatarUrl: 'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
        //             },
        //             {
        //                 id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
        //             nombreMarca : "Net540",
        //             nombreProducto : "Plataforma del trabajo",
        //             precioProducto : "$10.000 x Cupon",
        //             descripcionProducto : "Confiable, eficiente, seguro ",
        //             avatarUrl: 'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
        //             },
        //             {
        //             id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
        //             nombreMarca : "Evergreen",
        //             nombreProducto : "Servicios tapiceria para mobiliario",
        //             precioProducto : "$400.000",
        //             descripcionProducto : "Confort, Elegancia, Duradero",
        //             avatarUrl: 'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon'
        //             },
        //             {
        //             id: '63c05386-36a2-4522-9ac1-364ad7bec5e9',
        //             nombreMarca : "DADE:Luxury&Home",
        //             nombreProducto : "Diseño de interior y mobiliario",
        //             precioProducto : "$2'000.000",
        //             descripcionProducto : "Personalizado, estetica, buen gusto",
        //             avatarUrl: 'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon'
        //             },
        //         ]
        //     })
        // }, 2000)
    }
    fetchCharacter = async () => {
        this.setState({ loading: true, error: null})

        try{
            const response = await fetch (
                `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
                );
            const data = await response.json();

            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results),
                },
                nextPage: this.state.nextPage + 1,
            })
        }catch (error) {
            this.setState({
                loading: false,
                error: error,
                })

        }
    }
    renderLoad() {
            return <div>
                    <img src={load}/>
                </div>
        
    }


 render(){
     return <React.Fragment>
         <div className="heroButton">
         <div className="titleButton">
             <h1>Páginas de mis amigos</h1>
         </div>
         <div className="blockButton">
             <Link to="/feed/arNew" className="buttonNew">CONSTRUIR MI PÁGINA</Link>
         </div>
         </div>
         <div className="pages_List">
            <div className="container_pages">
                
                <PagesList Feed={this.state.data.results}/>

            </div>
            <div className="container_pages">
            {this.state.loading &&
                this.renderLoad()
            }
            {!this.state.loading &&
                <button className="buttonNew" onClick={() => this.fetchCharacter()}>CARGAR MÁS</button>
            }
            </div>
         </div>
     </React.Fragment>
 }
}

export default Feed;