import css from './Navigation.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
