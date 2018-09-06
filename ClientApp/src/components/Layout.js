import React from 'react';
import NavMenu from './NavMenu/NavMenu';
import Footer from './Footer/Footer';

export default props => (
  <React.Fragment>
    <div className="container-fluid px-0" >
      <div className="row">
        <div className="col-12">
          <NavMenu />
        </div>
      </div>
    </div>
    <div className="container px-0">
      <div className="row">
        {props.children}
      </div>
    </div>
    <Footer />
  </React.Fragment>
);
