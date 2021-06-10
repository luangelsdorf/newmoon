import React from 'react';
import styles from './ComingSoonHeading.module.css'

export default function ComingSoonHeading(props) {
    return (
        <h1 className={styles.heading}>{props.children}</h1>
    )
}