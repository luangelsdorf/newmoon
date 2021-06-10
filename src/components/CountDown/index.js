import React from 'react';
import styles from './CountDown.module.css'

export default function CountDown(props) {
  return (
    <span className={styles.countdown}>
      {props.children}
    </span>
  )
}