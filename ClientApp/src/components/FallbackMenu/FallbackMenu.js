import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import '../NavMenu/NavMenu.css';

export default class FallbackMenu extends React.Component {
    render() {
        debugger;
        return (
            <Navbar color="light" light>
                <Nav navbar>
                    <NavItem>
                        <NavLink href={'/'}>Home</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
