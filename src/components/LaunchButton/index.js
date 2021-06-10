import React from 'react';
import styles from './LaunchButton.module.css'

export default function LaunchButton(props) {
  return (
    <button className={`${styles.launch}`}>{props.children}</button>
  )
}