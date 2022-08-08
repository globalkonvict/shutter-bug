import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from 'assets/camera.png';
import menuOpen from 'assets/application.png';
import menuClose from 'assets/cancel.png';

function Navbar() {
  // set nav toggle state
  const [active, setActive] = useState('none');

  // toggle mobile nav
  const toggleMobileMenu = () =>
    active === 'none' ? setActive('block') : setActive('none');

  return (
    <Fixed>
      <NavStyled>
        <LogoStyled src={logo} alt="logo" />
        <LogoText>Shutter Bug</LogoText>
        <NavToggleStyled
          src={active === 'none' ? menuOpen : menuClose}
          onClick={toggleMobileMenu}
        />
        <NavItemsStyled active={active}>
          <NavItemStyled>
            <Link to="/">Home</Link>
          </NavItemStyled>
          <NavItemStyled>
            <Link to="/users">Shutterbugs</Link>
          </NavItemStyled>
          <NavItemStyled>
            <Link to="/albums">Albums</Link>
          </NavItemStyled>
          <NavItemStyled>
            <Link to="/about">About</Link>
          </NavItemStyled>
        </NavItemsStyled>
      </NavStyled>
    </Fixed>
  );
}

const Fixed = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
`;

// Main Nav Container
const NavStyled = styled.nav`
  font-size: 14px;
  background: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 35px;
  @media (min-width: 768px) {
    padding: 10px;
    display: flex;
    justify-content: center;
    height: 70px;
    align-items: center;
  }
`;

// Navigation Items Container
const NavItemsStyled = styled.ul`
  list-style-type: none;
  display: ${(props) => props.active};
  @media (min-width: 768px) {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

// Navigation Links
const NavItemStyled = styled.li`
  text-align: center;
  margin: 25px auto;
  @media (min-width: 768px) {
    margin: 0;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
    &:hover {
      color: rgb(160, 160, 159);
    }
    @media (min-width: 768px) {
      margin-left: 40px;
    }
  }
`;

// NavBar Toggle
const NavToggleStyled = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: 1px solid white;
  padding: 8px;
  width: 32px;
  height: 32px;
  @media (min-width: 768px) {
    display: none;
  }
`;

// Logo
const LogoStyled = styled.img`
  position: absolute;
  top: 15px;
  left: 20px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  @media (min-width: 768px) {
    top: 10px;
    left: 20px;
  }
`;

// Logo Text
const LogoText = styled.h1`
  font-size: 1.5rem;
  position: absolute;
  top: 20px;
  left: 80px;
  cursor: pointer;
  font-weight: lighter;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.25rem;
    top: 25px;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
    top: 30px;
  }
`;

export default Navbar;
