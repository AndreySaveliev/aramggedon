import React, { useEffect, useState } from 'react';
import styles from './header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>ARMAGGEDON</h1>
      <p className={styles.description}>
        ООО “Команда им. Б. Уиллиса”.
        <br /> Взрываем астероиды с 1998 года.
      </p>
    </header>
  );
};
