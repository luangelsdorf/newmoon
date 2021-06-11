import React from 'react';
import styles from './MainSection.module.css'

export default function Main(props) {
  return (
    <>
      <main className="container-fluid">
        <div className="row w-100 flex-center text-center">
          <div className="col-4">
            {props.children}
          </div>
        </div>
      </main>
    </>
  )
}