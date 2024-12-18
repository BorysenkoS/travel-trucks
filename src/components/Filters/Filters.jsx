import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, fetchCampers } from '../../redux/campersSlice';
import styles from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters);
  const { location, form, features } = useSelector(
    (state) => state.campers.filters
  );
  console.log(features);

  const handleInputChange = (e) => {
    dispatch(setFilter({ key: 'location', value: e.target.value }));
  };

  const handleBodyTypeChange = (e) => {
    dispatch(setFilter({ key: 'form', value: e.target.value }));
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
    <div>
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
        <label>
          <input
            type="checkbox"
            value="AC"
            checked={filters.features.includes('AC')}
            onChange={() => handleFeatureChange('AC')}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            value="AC"
            checked={filters.features.includes('AC')}
            onChange={() => handleFeatureChange('AC')}
          />
          Air Conditioning
        </label>
        <label>
          <input
            type="checkbox"
            value="AC"
            checked={filters.features.includes('AC')}
            onChange={() => handleFeatureChange('AC')}
          />
          Air Conditioning
        </label>
        <label>
          <input
            type="checkbox"
            value="kitchen"
            checked={filters.features.includes('bathroom')}
            onChange={() => handleFeatureChange('bathroom')}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            value="bathroom"
            checked={filters.features.includes('kitchen')}
            onChange={() => handleFeatureChange('kitchen')}
          />
          Bathroom
        </label>
      </div>
      <div>
        <h3>Vehicle type</h3>
        <label>
          <input
            type="radio"
            name="form"
            value="panelTruck"
            checked={form === 'panelTruck'}
            onChange={handleBodyTypeChange}
          />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="fullyIntegrated"
            checked={form === 'fullyIntegrated'}
            onChange={handleBodyTypeChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="form"
            value="alcove"
            checked={form === 'alcove'}
            onChange={handleBodyTypeChange}
          />
          Alcove
        </label>
      </div>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filters;
