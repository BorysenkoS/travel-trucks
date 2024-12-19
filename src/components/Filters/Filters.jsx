import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, fetchCampers } from '../../redux/campersSlice';
import styles from './Filters.module.css';
import sprite from '../../assets/sprite.svg';
import Button from '../Button/Button';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters);
  const { location, form, features, transmission } = useSelector(
    (state) => state.campers.filters
  );

  const handleInputChange = (e) => {
    dispatch(setFilter({ key: 'location', value: e.target.value }));
  };

  const handleBodyTypeChange = (e) => {
    dispatch(setFilter({ key: 'form', value: e.target.value }));
  };

  const handleBodyTypeTransmission = (e) => {
    const value = e.target.value;
    const isSelected = transmission === value;

    dispatch(
      setFilter({ key: 'transmission', value: isSelected ? '' : value })
    );
  };

  const handleFeatureChange = (feature) => {
    dispatch(setFilter({ key: 'features', value: feature }));
    dispatch(fetchCampers());
  };

  const handleSearch = () => {
    const trimmedLocation = location.trim();
    dispatch(setFilter({ key: 'location', value: trimmedLocation }));

    dispatch(fetchCampers());
  };

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.locationWrapper}>
        <h3 className={styles.location}>Location</h3>
        <input
          className={styles.locationSearchInput}
          type="text"
          placeholder="City"
          value={location}
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
              checked={filters.features.includes('AC')}
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
              checked={transmission === 'automatic'}
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
              checked={filters.features.includes('kitchen')}
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
              checked={filters.features.includes('TV')}
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
              checked={filters.features.includes('bathroom')}
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
              form === 'panelTruck' ? styles.active : ''
            }`}
          >
            <input
              type="radio"
              name="form"
              value="panelTruck"
              checked={form === 'panelTruck'}
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
              form === 'fullyIntegrated' ? styles.active : ''
            }`}
          >
            <input
              type="radio"
              name="form"
              value="fullyIntegrated"
              checked={form === 'fullyIntegrated'}
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
              form === 'alcove' ? styles.active : ''
            }`}
          >
            <input
              type="radio"
              name="form"
              value="alcove"
              checked={form === 'alcove'}
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
