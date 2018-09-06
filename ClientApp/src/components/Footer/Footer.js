import React from 'react';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer bg-dark py-3 text-light">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="text-capitalized">Follow HomeFoodies</h4>
                        </div>
                        <br />
                        <div className="col-12">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="text-light" href={'/'}>Home</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                        <br />
                        <div className="col-12">© 2018 HomeFoodie</div>
                    </div>
                </div>
            </footer>
        );
    }
}