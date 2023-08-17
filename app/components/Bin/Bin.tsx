'use client'
import React from 'react'
import { useBin } from '../Context/BinContext'
import styles from './bin.module.css'


export const Bin = () => {

  const bin = useBin()
  return (
    <div className={styles.bin}>
      <p className={styles.bin_name}>Корзина</p>
      <p className={styles.asteroid_count}>{bin?.state.length} астероидов</p>
      <button className={styles.button} onClick={() => bin?.setSend(true)}>Отправить</button>
    </div>
  )
}
