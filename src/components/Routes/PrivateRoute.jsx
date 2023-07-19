import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { selectAuth } from 'redux/auth/selector';

const PrivateRoute = () => {
  const isAuth = useSelector(selectAuth);
  return isAuth ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoute;
