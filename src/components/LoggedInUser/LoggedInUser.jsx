import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { authOperations, authSelectors } from '../../redux/Auth';
import { Button } from '../ContactList/ContactList.styled';
import { UserNameContainer } from './LoggedInUser.styled';

const LoggedInUser = () => {
  const dispatch = useDispatch()
  const userName = useSelector(authSelectors.getUsername)

  return (
    <UserNameContainer>
      <h3 style={{marginRight: '20px'}}>YOU ARE WELCOME {userName.toUpperCase()}</h3>
      <Button onClick={() => dispatch(authOperations.logOutUser())}>Log Out</Button>
    </UserNameContainer>
  );
};

export default LoggedInUser;
