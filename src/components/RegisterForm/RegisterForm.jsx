import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    try {
      if (password.length <= 7) {
        alert('Password should be minimum 7 characters');
        setPassword('');
        return;
      }
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Registration error!');
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={handleChange}
          placeholder="enter your name"
        />
        <input
          className={css.input}
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        <input
          className={css.input}
          id="password"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          placeholder="enter your password"
        />
        <button className={css.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
