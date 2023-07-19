import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selector';
import css from './User.module.css';

const User = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  const user = useSelector(selectUser);
  return (
    <div className={css.userMenu}>
      <p className={css.text}>Welcome {user?.name}!</p>
      <button className={css.btn} onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default User;
