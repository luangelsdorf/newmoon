import React, {useState} from 'react';
import styles from './Form.module.css'

export default function Form() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();    // prevenir o comportamento padrão
    e.target.reset();      // limpa o form
    if (submitted) return; // não fazer nada caso já tenha enviado uma vez

    let data = {
      email,
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setEmail('')
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input onChange={ e => setEmail(e.target.value) } type="email" className="form-control" required="required" placeholder="YOUR E-MAIL HERE" />
        <button className="">SEND</button>
      </form>

      <p className={styles.message}>Please enter your email and <br className="d-block d-md-none" /> we'll get back to you soon.</p>
    </>
  )
}