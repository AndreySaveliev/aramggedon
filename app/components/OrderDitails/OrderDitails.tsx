'use client';
import React from 'react';
import styles from './orderDitails.module.css';
import { useBin } from '../Context/BinContext';
import { Asteroid } from '@/src/types/types';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';
import { Key, useState, useEffect } from 'react';
export const OrderDitails = () => {
  const bin = useBin();
  const [order, setOrder] = useState<Asteroid[] | undefined>(bin?.state!);

  useEffect(() => {
    setOrder(bin?.state);
  }, []);

  return (
    <>
      <div className={styles.heading}>
        <h2 className={styles.title_h2}>Заказ отправлен!</h2>
      </div>
      {/* {order && order?.map((el: Asteroid, key: Key) => <AsteroidCard data={el} key={key} />)} */}
      <div className={styles.asteroids}>
        {bin?.state?.map((el: Asteroid, key: Key) => (
          <AsteroidCard data={el} key={key} fromBin={true} />
        ))}
      </div>
    </>
  );
};
