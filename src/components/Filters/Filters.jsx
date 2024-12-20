import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilter,
  fetchCampers,
  clearFilters,
} from '../../redux/campersSlice';
import styles from './Filters.module.css';
import sprite from '../../assets/sprite.svg';
import Button from '../Button/Button';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters);
  const { location, form, features, transmission } = filters;

  const [localFilters, setLocalFilters] = useState({
    location,
    form,
    features,
    transmission,
  });

  const handleInputChange = (e) => {
    setLocalFilters((prev) => ({
      ...prev,
      location: e.target.value,
    }));
  };

  const handleBodyTypeChange = (e) => {
    setLocalFilters((prev) => ({
      ...prev,
      form: e.target.value,
    }));
  };

  const handleBodyTypeTransmission = (e) => {
    const value = e.target.value;
    const isSelected = localFilters.transmission === value;

    setLocalFilters((prev) => ({
      ...prev,
      transmission: isSelected ? '' : value,
    }));
  };

  const handleFeatureChange = (feature) => {
    setLocalFilters((prev) => {
      const updatedFeatures = prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features: updatedFeatures };
    });
  };

  const handleSearch = () => {
    dispatch(
      setFilter({ key: 'location', value: localFilters.location.trim() })
    );
    dispatch(setFilter({ key: 'form', value: localFilters.form }));
    dispatch(setFilter({ key: 'features', value: localFilters.features }));
    dispatch(
      setFilter({ key: 'transmission', value: localFilters.transmission })
    );

    dispatch(fetchCampers());
    dispatch(clearFilters());
  };

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.locationWrapper}>
        <h3 className={styles.location}>Location</h3>
        <input
          className={styles.locationSearchInput}
          type="text"
          placeholder="City"
          value={localFilters.location}
          onChange={handleInputChange}
        />
      </div>
      <p className={styles.filtersTitle}>Filters</p>
      <div>
        <h3 className={styles.filtersVehicle}>Vehicle equipment</h3>
        <div className={styles.customLine}></div>
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value="AC"
              checked={localFilters.features.includes('AC')}
              onChange={() => handleFeatureChange('AC')}
              className={styles.checkboxInput}
            />
            <div className={styles.customCheckbox}>
              <span className={styles.icon}>
                <svg className={styles.iconGrid} width={32} height={32}>
                  <use href={`${sprite}#icon-wind`} />
                </svg>
              </span>
              <span>AC</span>
            </div>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value="automatic"
              checked={localFilters.transmission === 'automatic'}
              onChange={handleBodyTypeTransmission}
              className={styles.checkboxInput}
            />
            <div className={styles.customCheckbox}>
              <span className={styles.icon}>
                <svg className={styles.iconGrid} width={32} height={32}>
                  <use href={`${sprite}#icon-automatic`} />
                </svg>
              </span>
              <span>Automatic</span>
            </div>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value="kitchen"
              checked={localFilters.features.includes('kitchen')}
              onChange={() => handleFeatureChange('kitchen')}
              className={styles.checkboxInput}
            />
            <div className={styles.customCheckbox}>
              <span className={styles.icon}>
                <svg className={styles.iconGrid} width={32} height={32}>
                  <use href={`${sprite}#icon-cup-hot`} />
                </svg>
              </span>
              <span>Kitchen</span>
            </div>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value="TV"
              checked={localFilters.features.includes('TV')}
              onChange={() => handleFeatureChange('TV')}
              className={styles.checkboxInput}
            />
            <div className={styles.customCheckbox}>
              <span className={styles.icon}>
                <svg className={styles.iconGrid} width={32} height={32}>
                  <use href={`${sprite}#icon-tv`} />
                </svg>
              </span>
              <span>TV</span>
            </div>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value="bathroom"
              checked={localFilters.features.includes('bathroom')}
              onChange={() => handleFeatureChange('bathroom')}
              className={styles.checkboxInput}
            />
            <div className={styles.customCheckbox}>
              <span className={styles.icon}>
                <svg className={styles.iconGrid} width={32} height={32}>
                  <use href={`${sprite}#icon-ph-shower`} />
                </svg>
              </span>
              <span>Bathroom</span>
            </div>
          </label>
        </div>
      </div>
      <div>
        <h3 className={styles.filtersVehicle}>Vehicle type</h3>
        <div className={styles.customLine}></div>
        <div className={styles.radioGroup}>
          <label
            className={`${styles.radioLabel} ${
              localFilters.form === 'panelTruck' ? styles.active : ''
            }`}
          >
            <input
              type="radio"
              name="form"
              value="panelTruck"
              checked={localFilters.form === 'panelTruck'}
              onChange={handleBodyTypeChange}
              className={styles.radioInput}
            />
            <div className={styles.radioBox}>
              <svg className={styles.iconGrid} width={32} height={32}>
                <use href={`${sprite}#icon-bi-grid`} />
              </svg>
              <span className={styles.radioSpan}>Van</span>
            </div>
          </label>

          <label
            className={`${styles.radioLabel} ${
              localFilters.form === 'fullyIntegrated' ? styles.active : ''
            }`}
          >
            <input
              type="radio"
              name="form"
              value="fullyIntegrated"
              checked={localFilters.form === 'fullyIntegrated'}
              onChange={handleBodyTypeChange}
              className={styles.radioInput}
            />
            <div className={styles.radioBox}>
              <svg className={styles.iconGrid} width={28} height={28}>
                <use href={`${sprite}#icon-bi-grid-1x2`} />
              </svg>
              <span className={styles.radioSpan}>Fully Integrated</span>
            </div>
          </label>

          <label
            className={`${styles.radioLabel} ${
              localFilters.form === 'alcove' ? styles.active : ''
            }`}
          >
            <input
              type="radio"
              name="form"
              value="alcove"
              checked={localFilters.form === 'alcove'}
              onChange={handleBodyTypeChange}
              className={styles.radioInput}
            />
            <div className={styles.radioBox}>
              <svg className={styles.iconGrid} width={32} height={32}>
                <use href={`${sprite}#icon-bi-grid-3x3-gap`} />
              </svg>
              <span className={styles.radioSpan}>Alcove</span>
            </div>
          </label>
        </div>
      </div>
      <Button text={'Search'} onClick={handleSearch} />
    </div>
  );
};

export default Filters;
