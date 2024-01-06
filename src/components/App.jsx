import React, { lazy, Suspense, useEffect } from 'react';
import { Container } from './Container/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/Auth';
import Navigation from './Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import LoggedInUser from './LoggedInUser/LoggedInUser';
import RegisterNavigation from './RegisterNavigation/RegisterNavigation';


const Home = lazy(() => import('../pages/Home/Home'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const PublicRoute = lazy(() => import('../routes/PublicRoute/PublicRoute'));
const PrivateRoute = lazy(() => import('../routes/PrivateRoute/PrivateRoute'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<PublicRoute exact component={<Home />} />} />
              <Route path="/register" element={<PublicRoute restricted component={<Registration/>}/>}/>
              <Route path="/login" element={<PublicRoute restricted component={<Login/>}/>}/>
              <Route path="/contacts" element={<PrivateRoute component={<Contacts/>}/>}/>
            </Routes>
          </Suspense>
        </Container>
         }
    </>
  );
};

export default App;