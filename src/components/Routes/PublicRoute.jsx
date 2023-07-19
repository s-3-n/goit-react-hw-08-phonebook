import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import { selectAuth } from 'redux/auth/selector';

const PublicRoute = () => {
  const isAuth = useSelector(selectAuth);
  return isAuth ? <Navigate to={'/contacts'} /> : <Outlet />;
};

export default PublicRoute;
