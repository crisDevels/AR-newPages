import React from 'react'

import './styles/centerLoading.css'

import loader from '../image/loader.gif'

function PageLoading() {
    return (
        <div className="center-div">
            <div className="flex-div">
                <img alt="loader gif" src={loader} width="100px" />
            </div>
        </div>
    )
}

export default PageLoading