import React from 'react';
import styles from './Logo.module.css';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <svg className={styles.logo} width={136} height={15}>
          <use href={`${sprite}#icon-TravelTrucks`} />
        </svg>
      </NavLink>
    </div>
  );
};

export default Logo;
