import React from 'react';
import { connect } from 'react-redux';
import About from '../Panel/About';
import Crave from '../Panel/Crave';
import Share from '../Panel/Share';
import HowTo from '../Panel/HowTo';

const Home = props => (
  <div className="col">
    <div className="col py-3">
      <h1 className="h4 font-weight-normal">Do you love eating homemade meals or enjoy preparing them?</h1>
      <h4 className="font-weight-bold">HomeFoodie matches cravers with creators.</h4>
    </div>
    <Crave className="col bg-dark text-light py-3" />
    <About className="col py-3" />
    <Share className="col bg-dark text-light py-3" />
    <HowTo className="col py-3" />
  </div>
);

export default connect()(Home);
