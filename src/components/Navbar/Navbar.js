import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
import { HashLink as HLink } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <>
      <nav id="top" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              src="psyque.png"
              height="60"
              loading="lazy"
            />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Right elements --> */}
          <div className="collapse navbar-collapse text-larger" style={{fontSize: "20px"}}>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <HLink className='nav-link' to="/#about-us">About Us </HLink>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="communities">Communities </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="appointments">Appointments </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="surveys">Surveys </Link>
              </li>
              <li className='nav-item'>
                <HLink className='nav-link' to="#main-footer">Contact Us </HLink>
              </li>
              <li className='nav-item'>
                <Link className='d-flex align-items-center'  to="login">
                  <img
                    src='login.png'
                    role="button"
                    className='mt-3'
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
