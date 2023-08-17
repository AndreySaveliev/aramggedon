'use client';
import React from 'react';
import { useBin } from '../Context/BinContext';
import styles from './cond.module.css';
import { ToggleDistance } from '../ToggleDistance/ToggleDistance';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';
import { Asteroid, Dates } from '@/src/types/types';
import { UserAsteroids } from '../UserAsteroids/UserAsteroids';
import { OrderDitails } from '../OrderDitails/OrderDitails';
import { Bin } from '../Bin/Bin';

export const ConditionalComponent = ({ dates }: { dates: Dates }) => {
  const bin = useBin();
  return (
    <>
      {!bin?.send ? (
        <>
          <div className={styles.asteroid_container}>
            <div className={styles.heading}>
              <h2 className={styles.title_h2}>Ближайшие подлёты астероидов</h2>
              <ToggleDistance />
            </div>
            <div className={styles.asteroids}>
              {Object.keys(dates).map((date) =>
                dates[date as unknown as keyof Dates].map((el: Asteroid, key: number) => (
                  <AsteroidCard fromBin={false} data={el} key={key} />
                ))
              )}
            </div>
            <div className={styles.asteroids}>
              <UserAsteroids />
            </div>
          </div>
          <Bin />
        </>
      ) : (
        <div className={styles.asteroid_container}>
          <OrderDitails />
        </div>
      )}
    </>
  );
};
