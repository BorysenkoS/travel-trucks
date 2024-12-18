import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CamperCard from '../../components/CamperCard/CamperCard';
import { fetchCampers } from '../../redux/campersSlice';

import styles from './CamperList.module.css';

const CamperList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.campers);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCampers());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }
  return (
    <div className={styles.camperList}>
      {items.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;
