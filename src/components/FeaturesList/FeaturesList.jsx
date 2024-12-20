import React from 'react';
import sprite from '../../assets/sprite.svg';
import styles from './FeaturesList.module.css';

const FeaturesList = ({ camper }) => {
  const features = [
    {
      label: camper.transmission,
      value: camper.transmission,
      iconId: 'icon-automatic',
    },
    {
      label: camper.engine,
      value: camper.engine,
      iconId: 'icon-fuel-pump',
    },
    { label: 'Kitchen', value: camper.kitchen, iconId: 'icon-cup-hot' },
    { label: 'AC', value: camper.AC, iconId: 'icon-wind' },
    { label: 'Bathroom', value: camper.bathroom, iconId: 'icon-ph-shower' },
    { label: 'TV', value: camper.TV, iconId: 'icon-tv' },
    { label: 'Radio', value: camper.radio, iconId: 'icon-ui-radios' },
  ];

  const activeFeatures = features.filter((feature) => feature.value);
  return (
    <div className={styles.featuresListWrapper}>
      <ul className={styles.featuresList}>
        {activeFeatures.map((feature) => (
          <li className={styles.featuresItem} key={feature.label}>
            <svg width={20} height={20} style={{ marginRight: '8px' }}>
              <use href={`${sprite}#${feature.iconId}`} />
            </svg>
            {feature.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesList;
