import React from 'react';
import styles from './Form.module.css'

export default function Form() {
  return (
    <>

      <form className={styles.form}>
        <input type="email" className="form-control" required="required" placeholder="YOUR E-MAIL HERE" />
        <button className="">SEND</button>
      </form>

      <p className={styles.message}>Please enter your email and <br className="d-block d-md-none" /> we'll get back to you soon.
      </p>

    </>
  )
}