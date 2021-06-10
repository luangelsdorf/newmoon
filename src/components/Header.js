import React from 'react';
import InstagramLogo from "./InstagramLogo";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid flex-column">

          <div className="d-flex w-100 justify-content-between" id="links">
            <div className="d-flex align-items-center">
              <InstagramLogo />
              <a href="#">Follow us on Instagram</a>
            </div>
            <a href="#">Contact us</a>
          </div>

          <div className="d-flex w-100 justify-content-center">
            <img src="/img/logo.svg" alt="NewMoon Logo"/>
          </div>

        </div>
      </nav>
    </header>
  )
}