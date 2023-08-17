'use client';
import React, { Key, useEffect, useRef, useState } from 'react';
import styles from './userAsteroids.module.css';
import { Asteroid, Dates } from '@/src/types/types';
import { getNeoData } from '@/src/api/fetchNeoData';
import { AsteroidCard } from '../AsteroidCard/AsteroidCard';
import { Loader } from '../Loader/Loader';
export const UserAsteroids = ({}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [dates, setDates] = useState<Dates>({});
  const [dayCounter, setDayCounter] = useState<number>(1);
  const [showLoader, setShowLoader] = useState(false)

  const debounce = (fn: (arg: number) => void, t: number) => {
    let time: number | NodeJS.Timeout | undefined;
    return function callFunction(arg: number) {
      window.clearTimeout(time);
      time = setTimeout(() => fn(arg), t);
    };
  };

  const callONBotton = async (arg: number) => {
    if (divRef.current && divRef.current!.getBoundingClientRect().bottom <= window.innerHeight) {
      setShowLoader(true)
      const res: Dates = await getNeoData(
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * arg)
      );
      setDates({ ...dates, ...res });
      setDayCounter(dayCounter + 1);
      setShowLoader(false)
    }
  };

  const onScrollDebounce = debounce(callONBotton, 1500);

  function wrapper() {
    return onScrollDebounce(dayCounter);
  }

  useEffect(() => {
    document.addEventListener('scroll', wrapper);
    return () => {
      document.removeEventListener('scroll', wrapper);
    };
  }, [dayCounter]);

  return (
    <>
      <div ref={divRef} className={styles.div}>
        {dates &&
          Object.keys(dates).map((date) =>
            // dates[date as unknown as keyof typeof dates].map((el: Asteroid, key: Key) => <AsteroidCard data={el} key={key} />)
            dates[date as unknown as keyof Dates].map((el: Asteroid, key: Key) => (
              <AsteroidCard data={el} key={key} />
            ))
          )}
      </div>
      <Loader isVisible={showLoader} />
    </>
  );
};
