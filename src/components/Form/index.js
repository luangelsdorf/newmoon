import React, {useState} from 'react';
import styles from './Form.module.css'
import FormMessage from "../FormMessage";

export default function Form() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState('initial');

  function handleSubmit(e) {
    e.preventDefault();
    const submitBtn = e.target.children[1]
    submitBtn.disabled = true;

    if (submitted === 'success') return;
    setSubmitted('pending')
    e.target.reset();

    let data = {
      email,
    }

    setEmail('')

    fetch('/api/contact-sendgrid', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
      if (res.status === 200) {
        setSubmitted('success');
      } else {
        setSubmitted('failed');
      }
    })
  }

  return (
    <>
      <form onSubmit={ handleSubmit } className={styles.form}>
        <input onChange={ e => setEmail(e.target.value) } type="email" className="form-control" required="required" placeholder="YOUR E-MAIL HERE" />
        <button> <FormMessage state={ submitted } /> </button>
      </form>

      <p className={styles.message}>Please enter your email and <br className="d-block d-md-none" /> we'll get back to you soon.</p>
    </>
  )
}

// ✓