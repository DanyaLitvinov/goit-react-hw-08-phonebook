import React, { useEffect } from 'react';
import { Container } from './Container/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/Auth';
import Navigation from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import LoggedInUser from './LoggedInUser/LoggedInUser';
import RegisterNavigation from './RegisterNavigation/RegisterNavigation';
import Home from '../pages/Home/Home';
import PublicRoute from '../routes/PublicRoute/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute/PrivateRoute';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';

const App = () => {

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const isFetchingCurrUser = useSelector(authSelectors.getFetchCurrentUser)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


  return (
    <>
      {isFetchingCurrUser ?
        <h1>...Loading</h1>
        : <Container>
        <div className={'navigation'}>
          <Navigation />
          {isLoggedIn ? <LoggedInUser /> : <RegisterNavigation />}
        </div>
        <Routes>
          <Route path='/' element={<PublicRoute exact component={<Home />} />} />
          <Route path="/register" element={<PublicRoute restricted component={<Registration/>}/>}/>
          <Route path="/login" element={<PublicRoute restricted component={<Login/>}/>}/>
          <Route path="/contacts" element={<PrivateRoute component={<Contacts/>}/>}/>
        </Routes>
        </Container>
         }
    </>
  );
};

export default App;
