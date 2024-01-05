import React from 'react';
import { NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import { authSelectors } from '../../redux/Auth';
import { NavBar } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <NavBar>
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && <NavLink style={{marginLeft: '20px'}} to="/contacts">
        Contacts
      </NavLink>}
    </NavBar>
  );
};

export default Navigation;
