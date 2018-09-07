import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home/Home';
// import SearchResult from './components/SearchResults/SearchResult';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    {/* <Route path='/search' component={SearchResult} /> */}
    {/*<Route path='/fetchdata/:startDateIndex?' component={FetchData} /> */}
  </Layout>
);
