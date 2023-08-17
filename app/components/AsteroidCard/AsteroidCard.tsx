import React from 'react';
import styles from './asteroid.module.css';
import arrowSVG from '../../../public/images/arrow.svg';
import asteroidSmall from '../../../public/images/asteroid_small.png';
import asteroidBig from '../../../public/images/asteroid_big.png';
import Image from 'next/image';
import { Asteroid } from '../../../src/types/types';
import { OrderButton } from '../OrderButton/OrderButton';
import { Distance } from './Distance';

export const AsteroidCard = ({ data, fromBin }: { data: Asteroid; fromBin?: boolean }) => {
  const diametr =
    (data.estimated_diameter.meters.estimated_diameter_max +
      data.estimated_diameter.meters.estimated_diameter_min) /
    2;

  const isSmall = diametr <= 100;

  const calculateDistance = (distance: number) => {
    return Math.floor(distance)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.date}>{data.close_approach_data[0].close_approach_date}</h3>
      <div className={styles.info}>
        <div className={styles.distance}>
          <Distance data={data} />
          <Image className={styles.distance_vector} src={arrowSVG} alt="arrow image" />
        </div>
        <Image
          className={styles.ateroid_image}
          src={isSmall ? asteroidSmall : asteroidBig}
          alt="ateroid image"
        />
        <div className={styles.additional_info}>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.diametr}>Ø ${Math.floor(diametr)}</p>
        </div>
      </div>
      {!fromBin && <OrderButton data={data} />}
    </div>
  );
};
