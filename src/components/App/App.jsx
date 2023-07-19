import Contacts from '../../pages/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selector';
import { refreshUser } from 'redux/auth/operations';
import User from 'components/User/User';
import Navigation from 'components/Navigation/Navigation';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { Navigate, Route, Routes } from 'react-router';
import PublicRoute from 'components/Routes/PublicRoute';
import Login from 'pages/Login';
import Register from 'pages/Register';

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);

  useEffect(() => {
    !isAuth && dispatch(refreshUser());
  }, [dispatch, isAuth]);
  return (
    <>
      {isAuth ? <User /> : <Navigation />}

      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};
