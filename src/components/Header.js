import React from 'react';
import InstagramLogo from "./InstagramLogo";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid flex-column">

          <div className="d-flex w-100 justify-content-between">
            <div className="me-auto">
              <InstagramLogo />
              <a href="#">Follow us on Instagram</a>
            </div>
            <a className="ms-auto" href="#">Contact us</a>
          </div>

          <div className="d-flex w-100 justify-content-center">
            <img src="/img/logo.svg" alt="NewMoon Logo"/>
          </div>

        </div>
      </nav>
    </header>
  )
}