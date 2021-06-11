import React from 'react';
import styles from './MainHeading.module.css'

export default function MainHeading(props) {
  return (
    <h1 className={styles.heading}>{props.children}</h1>
  )
}