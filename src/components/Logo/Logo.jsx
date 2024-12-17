import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <p className={styles.logo}>
        <span className={styles.logoSpan}>Travel</span>Track
      </p>
    </div>
  );
};

export default Logo;
