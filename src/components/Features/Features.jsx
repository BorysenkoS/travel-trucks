import React from 'react';
import styles from './Features.module.css';

const Features = ({ camper }) => {
  const features = [
    { label: 'Transmission', value: camper.transmission },
    { label: 'Engine', value: camper.engine },
    { label: 'AC', value: camper.AC },
    { label: 'Bathroom', value: camper.bathroom },
    { label: 'Kitchen', value: camper.kitchen },
    { label: 'TV', value: camper.TV },
    { label: 'Radio', value: camper.radio },
    { label: 'Refrigerator', value: camper.refrigerator },
    { label: 'Microwave', value: camper.microwave },
    { label: 'Gas', value: camper.gas },
    { label: 'Water', value: camper.water },
  ];

  // Деталі
  const details = [
    { label: 'Form', value: camper.form },
    { label: 'Length', value: camper.length ? `${camper.length} m` : null },
    { label: 'Width', value: camper.width ? `${camper.width} m` : null },
    { label: 'Height', value: camper.height ? `${camper.height} m` : null },
    { label: 'Tank Capacity', value: camper.tank ? `${camper.tank} L` : null },
    {
      label: 'Fuel Consumption',
      value: camper.consumption ? `${camper.consumption} L/100km` : null,
    },
  ];

  // Відображення активних характеристик
  const activeFeatures = features.filter((feature) => feature.value);
  const activeDetails = details.filter((detail) => detail.value);

  return (
    <div className={styles.featuresWrapper}>
      <div className={styles.featuresSection}>
        <ul className={styles.featuresList}>
          {activeFeatures.map((feature) => (
            <li key={feature.label} className={styles.featureItem}>
              <span className={styles.featureLabel}>{feature.label}:</span>{' '}
              {feature.value}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.detailsSection}>
        <h3>Vehicle details</h3>
        <ul className={styles.detailsList}>
          {activeDetails.map((detail) => (
            <li key={detail.label} className={styles.detailItem}>
              <span className={styles.detailLabel}>{detail.label}:</span>{' '}
              {detail.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
