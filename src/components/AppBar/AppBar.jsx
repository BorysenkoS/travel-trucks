import React from 'react';
import styles from './AppBar.module.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
        <Logo className={styles.logo} />
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;
