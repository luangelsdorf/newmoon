import React from 'react';

export default function Main(props) {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        {props.children}
      </div>

      <style jsx>
        {`
                div {
                height: 100%;
                }
        `}

      </style>
    </>
  )
}