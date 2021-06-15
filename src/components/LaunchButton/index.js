import React from 'react';
import styles from './LaunchButton.module.css';
import {launch} from "../../../public/js";

export default function LaunchButton(props) {
  return (
    <button onClick={launch} className={`${styles.launch}`}>{props.children}</button>
  )
}