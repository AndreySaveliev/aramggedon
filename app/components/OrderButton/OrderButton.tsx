'use client';
import React, { useState } from 'react';
import styles from './orderbutton.module.css';
import { Asteroid } from '@/src/types/types';
import { useBin } from '../Context/BinContext';

export const OrderButton = ({ data }: { data: Asteroid }) => {
  const [ordered, setOrdered] = useState(false);
  const binContext = useBin()

  const handleOrder = (data: Asteroid) => {
    setOrdered(true)
    binContext?.setState([...binContext.state, data])
  }

  return (
    <div className={styles.order}>
      <button disabled={ordered} onClick={() => handleOrder(data)} className={`${styles.button} ${ordered && styles.button_disabled}`}>{ordered ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}</button>
      <p className={styles.danger}>{data.is_potentially_hazardous_asteroid ? '⚠ Опасен' : ''}</p>
    </div>
  );
};
