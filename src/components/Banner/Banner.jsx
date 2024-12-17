import React from 'react';
import styles from './Banner.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Campers of your dreams</h1>
        <p className={styles.bannerText}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog">
          <Button text={'View Now'} />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
