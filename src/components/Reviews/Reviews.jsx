import React from 'react';
import styles from './Reviews.module.css';
import sprite from '../../assets/sprite.svg';

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <div>No reviews available.</div>;
  }

  return (
    <div className={styles.reviewsWrapper}>
      <ul className={styles.reviewList}>
        {reviews.map((review, index) => (
          <li className={styles.reviewItem} key={index}>
            <div className={styles.letterNameRattingWrapper}>
              <div className={styles.firstLetter}>
                {review.reviewer_name.charAt(0).toUpperCase()}
              </div>
              <div className={styles.reviewerName}>
                <p className={styles.name}>{review.reviewer_name}</p>
                {Array.from({ length: review.reviewer_rating }).map(
                  (_, index) => (
                    <svg key={`rating-${index}`} width={16} height={16}>
                      <use href={`${sprite}#icon-rating`} />
                    </svg>
                  )
                )}
                {Array.from({ length: 5 - review.reviewer_rating }).map(
                  (_, index) => (
                    <svg key={`star-${index}`} width={16} height={16}>
                      <use href={`${sprite}#icon-star`} />
                    </svg>
                  )
                )}
              </div>
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
