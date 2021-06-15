import React from 'react';
import styles from './LaunchButton.module.css';

export default function LaunchButton(props) {

  function handleClick() {
    document.body.style.backgroundPositionY = 'top';
  }

  return (
    <button onClick={handleClick} className={`${styles.launch}`}>{props.children}</button>
  )
}