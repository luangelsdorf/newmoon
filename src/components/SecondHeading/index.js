import React from 'react';
import styles from './SecondHeading.module.css'

export default function SecondHeading(props) {
  return (
    <h1 className={styles.heading}>{props.children}</h1>
  )
}