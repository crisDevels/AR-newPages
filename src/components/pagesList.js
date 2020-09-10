import React from 'react'

import  './styles/stylesPagesFriend.css'
import '../components/styles/Navbar.css'
import '../global.css'
import '../pages/styles/feed.css'

class PagesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                    {this.props.Feed.map((character) => {
                        return (
                            <li key={character.id}>
                                <div className="pageFriend">
                                    <img src={character.image}/>
                                <div>                                    
                                    <h1>{character.name}</h1>
                                    <p>{character.species}</p>
                                    <h2>Description:</h2>
                                    <p>{character.status}</p> 
                                </div>
                                <button className="buttonNew">VER PÁGINA</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
        );
    }
}

export default PagesList;