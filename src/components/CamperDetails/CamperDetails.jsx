import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CamperDetails.module.css';
import { useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/campersSlice';

import sprite from '../../assets/sprite.svg';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import BookingForm from '../BookingForm/BookingForm';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Loader from '../Loader/Loader';

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const isLoading = useSelector((state) => state.campers.isLoading);
  const [activeTab, setActiveTab] = useState('features');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const camper = campers?.find((camper) => camper.id === id);

  useEffect(() => {
    if (!campers || campers.length === 0) {
      dispatch(fetchCampers());
    }
  }, []);

  if (!camper) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.detailsWrapper}>
      <h1 className={styles.detailsTitle}>{camper.name}</h1>
      <div className={styles.reviewsLocationWrapper}>
        <p className={styles.cardReviewsText}>
          <svg className={styles.iconRating} width={16} height={16}>
            <use href={`${sprite}#icon-rating`} />
          </svg>{' '}
          {camper.rating}({camper.reviews.length} Reviews)
        </p>
        <div className={styles.location}>
          <svg className={styles.iconRating} width={16} height={16}>
            <use href={`${sprite}#icon-map`} />
          </svg>
          <p>{camper.location}</p>
        </div>
      </div>
      <p className={styles.cardText}>€{camper.price.toFixed(2)} </p>
      <div className={styles.gallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={`${camper.name} image ${index + 1}`}
            className={styles.detailsImages}
          />
        ))}
      </div>
      <p className={styles.text}>{camper.description}</p>
      <div className={styles.buttons}>
        <button
          className={`${styles.tabButton} ${
            activeTab === 'features' ? styles.active : ''
          }`}
          onClick={() => handleTabClick('features')}
        >
          Features
        </button>
        <button
          className={`${styles.tabButton} ${
            activeTab === 'reviews' ? styles.active : ''
          }`}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews
        </button>
      </div>
      <div className={styles.detailsComponentWrapper}>
        <div className={styles.featuresReviewsWrapper}>
          {activeTab === 'features' && <Features camper={camper} />}
          {activeTab === 'reviews' && <Reviews reviews={camper.reviews} />}
        </div>

        <ErrorBoundary>
          <BookingForm camperName={camper.name} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default CamperDetails;
