import React from 'react'
import {Navbar,NavItem,Icon} from 'react-materialize'
const NavBar = () => {
    return (
        <Navbar className="navbar"
            alignLinks="right"
            brand={<a className="brand-logo" href="#"><span id="title">Shashwat</span></a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="#about">
                About me
  </NavItem>
            <NavItem href="#skills">
                My Skills
  </NavItem>
  <NavItem href="#project">
                Projects
  </NavItem>
  <NavItem href="#aspire">
                Aspiration
  </NavItem>
  <NavItem href="#inspire">
                Inspiration
  </NavItem>
  <NavItem href="#foot">
                Contact Me
  </NavItem>
        </Navbar>
    )
}
export default NavBar;