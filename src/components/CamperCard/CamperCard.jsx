import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/campersSlice';
import styles from './CamperCard.module.css';
import sprite from '../../assets/sprite.svg';
import Button from '../Button/Button';
import FeaturesList from '../FeaturesList/FeaturesList';
import { Link } from 'react-router-dom';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.cardPhoto}
        src={camper.gallery[0]?.thumb}
        alt={camper.name}
      />
      <div className={styles.cardWrapper}>
        <div>
          {' '}
          <div className={styles.titlePriceWrapper}>
            <h2 className={styles.cardTitle}>{camper.name}</h2>
            <div className={styles.priceFavoriteButton}>
              <p className={styles.cardText}>€{camper.price.toFixed(2)} </p>
              <button
                className={styles.cardButton}
                onClick={handleFavoriteClick}
              >
                {isFavorite ? (
                  <svg className={styles.iconHeart} width={25} height={24}>
                    <use href={`${sprite}#icon-heart-pressed`} />
                  </svg>
                ) : (
                  <svg width={25} height={24}>
                    <use href={`${sprite}#icon-heart`} />
                  </svg>
                )}
              </button>
            </div>
          </div>
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
        </div>
        <div className={styles.CardDescription}>
          <p className={styles.text}>{camper.description}</p>
        </div>

        <FeaturesList camper={camper} />

        <div>
          <Link to={`/catalog/${camper.id}`}>
            <Button text={'Show more'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
