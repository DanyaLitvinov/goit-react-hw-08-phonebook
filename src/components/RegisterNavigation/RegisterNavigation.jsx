import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterNavigation = () => {
  return (
    <nav>
      <NavLink to="/register">
        SingUp
      </NavLink>
      <NavLink to="/login" style={{marginLeft: '20px'}}>
        Login
      </NavLink>
    </nav>
  );
};

export default RegisterNavigation;

