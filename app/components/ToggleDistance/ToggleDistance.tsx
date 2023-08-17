'use client';
import React from 'react';
import styles from './toggleDistance.module.css';
import { useBin } from '../Context/BinContext';

export const ToggleDistance = () => {

  const bin = useBin()

  const handleToggleUnit = (unit: string) => {
    if (unit!==bin?.unit) {
      bin?.setUnit(unit);
    }
  };

  return (
    <div className={styles.toggleDistance}>
      <p
        onClick={() => handleToggleUnit('km')}
        className={`${styles.text} ${bin?.unit === 'km' && styles.text_unactive}`}
      >
        в километрах{' '}
      </p>
      <span className={styles.span}> | </span>
      <p
        onClick={() => handleToggleUnit('moon')}
        className={`${styles.text} ${bin?.unit === 'moon' && styles.text_unactive}`}
      >
        {' '}
        в лунных орбитах
      </p>
    </div>
  );
};
