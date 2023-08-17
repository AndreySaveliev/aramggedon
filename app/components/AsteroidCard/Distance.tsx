'use client'
import React from 'react';
import styles from './asteroid.module.css';
import { Asteroid } from '@/src/types/types';
import { useBin } from '../Context/BinContext';

export const Distance = ({ data }: { data: Asteroid }) => {

  const bin = useBin()
  
  return (
    <p className={styles.distance_number}>
      {bin?.unit === 'km' ?  Math.floor(Number(data.close_approach_data[0].miss_distance.kilometers)) + ' км': Math.floor(Number(data.close_approach_data[0].miss_distance.lunar)) + ' лунных орбит'}
    </p>
  );
};
