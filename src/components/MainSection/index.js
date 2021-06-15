import React from 'react';
import styles from './MainSection.module.css'

export default function Main(props) {

  let d;
  props.form ? d = 'none' : d = 'flex';

  return (
    <>
      <section className={`${styles.section} container-fluid`} style={{display: d}}>
        <div className="row w-100 flex-center text-center">
          <div className="col-12 col-md-8">
            {props.children}
          </div>
        </div>
      </section>
    </>
  )
}