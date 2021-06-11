import React from 'react';
import InstagramLogo from "./InstagramLogo";

export default function Header() {
  return (
    <header>
      <div className="container-fluid flex-column">

        <div className="row w-100 justify-content-between" id="links">
          <div className="col-2">
            <div className="d-flex align-items-center">
              <InstagramLogo />
              <a href="#">Follow us on Instagram</a>
            </div>
          </div>
          <div className="col-1">
            <a href="#">Contact us</a>
          </div>
        </div>

        <div className="row w-100 justify-content-center">
          <div className="col-2">
            <img src="/img/logo.svg" alt="NewMoon Logo"/>
          </div>
        </div>

      </div>
    </header>
  )
}