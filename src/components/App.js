import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout'
import ArNew from '../pages/ArNew.js';
import Feed from '../pages/Feed.js';
import NotFound from '../pages/NotFound'
import Home from '../pages/Home';
import ProductPage from '../pages/ProductAR';


function App() {
    return (
      <BrowserRouter>
        <Layout>
        <Switch>
        <Route exact path="/feed/arNew" component={ArNew} />
        <Route exact path="/feed" component={Feed} />
        {/* <Route component={NotFound} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/productAR" component={ProductPage}/>
        </Switch>
        </Layout>
      </BrowserRouter>
    )
}

export default App;
