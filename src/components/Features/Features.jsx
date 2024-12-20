import React from 'react';
import sprite from '../../assets/sprite.svg';
import styles from './Features.module.css';

const Features = ({ camper }) => {
  const features = [
    {
      label: 'Transmission',
      value: camper.transmission,
      iconId: 'icon-automatic',
    },
    { label: 'Engine', value: camper.engine, iconId: 'icon-fuel-pump' },
    { label: 'AC', value: camper.AC, iconId: 'icon-wind' },
    { label: 'Bathroom', value: camper.bathroom, iconId: 'icon-ph-shower' },
    { label: 'Kitchen', value: camper.kitchen, iconId: 'icon-cup-hot' },
    { label: 'TV', value: camper.TV, iconId: 'icon-tv' },
    { label: 'Radio', value: camper.radio, iconId: 'icon-ui-radios' },
    {
      label: 'Refrigerator',
      value: camper.refrigerator,
      iconId: 'icon-solar-fridge-outline',
    },
    {
      label: 'Microwave',
      value: camper.microwave,
      iconId: 'icon-lucide-microwave',
    },
    { label: 'Gas', value: camper.gas, iconId: 'icon-hugeicons-gas-stove' },
    { label: 'Water', value: camper.water, iconId: 'icon-ion-water-outline' },
  ];

  const details = [
    { label: 'Form', value: camper.form },
    { label: 'Length', value: camper.length ? `${camper.length}` : null },
    { label: 'Width', value: camper.width ? `${camper.width}` : null },
    { label: 'Height', value: camper.height ? `${camper.height}` : null },
    { label: 'Capacity', value: camper.tank ? `${camper.tank}` : null },
    {
      label: 'Consumption',
      value: camper.consumption ? `${camper.consumption}` : null,
    },
  ];

  const activeFeatures = features.filter((feature) => feature.value);
  const activeDetails = details.filter((detail) => detail.value);

  return (
    <div className={styles.featuresWrapper}>
      <div className={styles.featuresSection}>
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

      <div className={styles.detailsSection}>
        <h3 className={styles.vehicleTitle}>Vehicle details</h3>
        <div className={styles.line}></div>
        <ul className={styles.detailsList}>
          {activeDetails.map((detail) => (
            <li key={detail.label} className={styles.detailItem}>
              <span className={styles.detailLabel}>{detail.label}:</span>
              {detail.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
