import React from 'react';

export default function FormMessage({ state }) {
  if (state === 'initial') {
    return <span>SEND</span>
  }

  else if (state === 'pending') {
    return (
      <div className="d-flex align-items-center">
        <span className="spinner-border me-2" />
        <span>SENDING...</span>
      </div>
    )
  }

  else if (state === 'failed') {
    return <span>✖ &nbsp; FAILED TO SEND!</span>
  }

  else if (state === 'success') {
    return  <span>✔ &nbsp; E-MAIL SENT!</span>
  }
}