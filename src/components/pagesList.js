import React from 'react'
import Skeleton from "react-loading-skeleton"

import  './styles/stylesPagesFriend.css'
import '../components/styles/Navbar.css'
import '../global.css'
import '../pages/styles/feed.css'
import Gravatar from '../components/Gravatar'
import { Link } from 'react-router-dom'

class PageListItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="pageFriend">
                    < Gravatar email={this.props.page.email}
                        alt="avatar"
                        className="foto-avatar" />
                    <div>                                    
                        <h1>{this.props.page.nombreMarca}</h1>
                        <p>{this.props.page.nombreProducto}</p>
                        <h2>Description:</h2>
                        <p>{this.props.page.descripcionProducto}</p> 
                    </div>
                    <Link className="text-none-decoration" to={`/Feed/${this.props.page.id}/edit`}>
                        <button className="buttonNew">VER PÁGINA</button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

class PagesList extends React.Component {
    render() {
        if (this.props.Feed.length === 0) {
            return (
                <ul className="list-unstyled">
                    {
                        Array(8).fill().map((item, index)=> (
                            <li key={index}>
                                <div className="pageFriend">
                                    <span className="foto-container">
                                        {<Skeleton circle={true} height={100} width={100} />}
                                    </span> 
                                    <div>                                    
                                        <h1>{<Skeleton height={20} width={250} />}</h1>
                                        <p>{<Skeleton height={20} width={250} />}</p>
                                        <h2>{<Skeleton height={20} width={150} />}</h2>
                                        <p>{<Skeleton height={20} width={250} />}</p> 
                                    </div>
                                    <h2>{<Skeleton height={20} width={100} />}</h2>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            )
        }
        return (
            <ul className="list-unstyled">
                    {this.props.Feed.map((page) => {
                        return (
                            <li key={page.id}>
                                < PageListItem page={page} />
                            </li>
                        );
                    }).reverse()
                    }
            </ul>
        );
    }
}

export default PagesList;