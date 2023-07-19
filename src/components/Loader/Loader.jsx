import css from './Loader.module.css';

import React from 'react';

const Loader = () => {
  return (
    <div className={css.spinner_container}>
      <div className={css.loading_spinner}></div>
    </div>
  );
};

export default Loader;
