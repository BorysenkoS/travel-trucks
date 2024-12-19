import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CamperDetails.module.css';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campersSlice';

import sprite from '../../assets/sprite.svg';
import Features from '../Features/Features';

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const isLoading = useSelector((state) => state.campers.isLoading);

  const camper = campers?.find((camper) => camper.id === id);

  useEffect(() => {
    if (!campers || campers.length === 0) {
      dispatch(fetchCampers());
    }
  }, []);

  if (!camper) {
    return <div>Loading...</div>;
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
      <Features camper={camper} />
    </div>
  );
};

export default CamperDetails;
