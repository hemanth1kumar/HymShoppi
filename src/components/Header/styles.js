import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
    width: 100%;
    background: ${({ theme }) => theme.navbarBg};
    padding: 24px ${({ theme }) => theme.spacing * 2}px;
    display: flex;
    align-items: center;
    box-shadow: -10px 0px 12px 5px ${({ theme }) => theme.boxShadow};
`

export const NavbarList = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin: 0px;
`

export const NavbarListItem = styled.li`
    padding: ${({ theme }) => theme.spacing}px;
    cursor: pointer;
    margin-right: ${({ theme }) => theme.spacing * 3}px;

    &.active {
        border-bottom: 3px solid #846c6c;
    }
    &:hover {
        border-bottom: 3px solid #846c6c;
    }

    &.logout:hover {
        border-bottom: none;
    }
`