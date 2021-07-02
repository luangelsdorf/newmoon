import React from 'react';
import InstagramLogo from "./InstagramLogo";
import {launch} from "../../public/js";

export default function Header() {
  return (
    <header>
      <div className="container-fluid p-0 flex-column">

        <div className="row w-100 m-0 justify-content-between" id="links">
          <div className="col-2">
            <div className="d-flex align-items-center">
              <InstagramLogo />
              <a id="follow-us" target="_blank" href="https://www.instagram.com/newmoon.works">Follow us on Instagram</a>
            </div>
          </div>
          <div className="col-4 col-lg-1 text-end">
            <a role="button" onClick={launch}>Contact us</a>
          </div>
        </div>

        <div className="row w-100 m-0 justify-content-center">
          <div className="col-8 col-md-2">
            <a href="/">
              <img src="/img/logo.svg" alt="NewMoon Logo"/>
            </a>
          </div>
        </div>

      </div>
    </header>
  )
}