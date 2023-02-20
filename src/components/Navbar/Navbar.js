import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* <!-- Navbar brand --> */}
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="psyque.png"
              height="60"
              loading="lazy"
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Right elements --> */}
          <div className="collapse navbar-collapse text-larger" style={{fontSize: "20px"}}>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href="#">About Us </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">Communities </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">Appointments </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">Surveys </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#">Contact Us </a>
              </li>
              <li className='nav-item'>
                <a className='d-flex align-items-center'  href="#">
                  <img
                    src='login.png'
                    role="button"
                    className='mt-3'
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
