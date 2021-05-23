import React from 'react'

import { useHistory, Link } from "react-router-dom";

import { Navbar, NavbarList, NavbarListItem } from './styles';

const Header = ({ toggleTheme, active }) => {
    const history = useHistory();

    const toLogin = () => {
        history.push("/login");
    }

    return (
        <Navbar>
            <NavbarList>
                <NavbarListItem as={Link} to="/" className={`${active === 'home' ? 'active' : ''}`}>Home</NavbarListItem>
                <NavbarListItem as={Link} to="/cart" className={`${active === 'cart' ? 'active' : ''}`}>Cart</NavbarListItem>
                <NavbarListItem as={Link} to="/profile" className={`${active === 'profile' ? 'active' : ''}`}>Profile</NavbarListItem>
                <NavbarListItem className="logout" onClick={toLogin}>Logout</NavbarListItem>
            </NavbarList>
        </Navbar>
    )
}
export default Header;