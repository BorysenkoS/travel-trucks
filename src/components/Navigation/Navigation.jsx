import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.linkActive)
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(styles.link, isActive && styles.linkActive)
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
    </div>
  );
};

export default Navigation;
