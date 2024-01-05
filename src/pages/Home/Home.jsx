import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/Auth';
import { NavLink } from 'react-router-dom';
import { HomeAuthContainer, HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
  const userName = useSelector(authSelectors.getUsername);


  return (
    <HomeContainer>
      <HomeTitle>Good Morning Sunshine {userName ? userName : ''}!</HomeTitle>
      <HomeAuthContainer>
        <h2
          style={{ marginRight: '10px' }}>{userName ? 'Add contacts to your phonebook!' : 'Dont have an account? Sign Up for free!'}</h2>
        <NavLink to={userName ? '/contacts' : '/register'}>
          {userName ? 'Go to contacts' : 'Sign Up'}
        </NavLink>
      </HomeAuthContainer>
      {!userName && <HomeAuthContainer>
        <h2 style={{ marginRight: '10px' }}>Have an account already? Then login!</h2>
        <NavLink to='/login'>
          Login
        </NavLink>
      </HomeAuthContainer>}
    </HomeContainer>
  );
};

export default Home;
