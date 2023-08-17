import React from 'react';
import styles from './loader.module.css';
export const Loader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className={`${styles.loader} ${isVisible && styles.text_active}`}>
      <div className={styles.loader_text}></div>
      <div className={styles.loader_text}></div>
      <div className={styles.loader_text}></div>
    </div>
  );
};
