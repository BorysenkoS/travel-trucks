import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/campersSlice';
import styles from './CamperCard.module.css';
import sprite from '../../assets/sprite.svg';

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
      <div>
        <div className={styles.titlePriceWrapper}>
          <h2 className={styles.cardTitle}>{camper.name}</h2>
          <div className={styles.priceFavoriteButton}>
            <p className={styles.cardText}>€{camper.price.toFixed(2)} </p>
            <button className={styles.cardButton} onClick={handleFavoriteClick}>
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
        <p>Rating: {camper.rating}</p>
        <p>{camper.description}</p>
      </div>
    </div>
  );
};

export default CamperCard;
