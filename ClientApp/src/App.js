import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home/Home';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    {/* <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} /> */}
  </Layout>
);
