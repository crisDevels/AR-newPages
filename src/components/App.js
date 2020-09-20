import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout'
import ArNew from '../pages/ArNew.js';
import Feed from '../pages/Feed.js';
import NotFound from '../pages/NotFound'
import Home from '../pages/Home';
import ProductPage from '../pages/ProductAR';
import PageEdit from '../pages/pageEdit';


function App() {
    return (
      <BrowserRouter>
        <Layout>
        <Switch>
        <Route exact path="/Feed/arNew" component={ArNew} />
        <Route exact path="/Feed/:badgeId/edit" component={PageEdit} />
        <Route exact path="/Feed" component={Feed} />
        {/* <Route component={NotFound} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/productAR" component={ProductPage}/>
        </Switch>
        </Layout>
      </BrowserRouter>
    )
}

export default App;
