import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import SearchResult from './components/SearchResults/SearchResult';
import Listing from './components/Listing/Listing';
import FallbackMenu from './components/FallbackMenu/FallbackMenu';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/search' component={SearchResult} />
    <Route path='/meal/:id' component={Listing} />
    <Route path='/menu' component={FallbackMenu} />
  </Layout>
);
