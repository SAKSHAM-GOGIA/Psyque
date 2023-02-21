import React from 'react'
import './loginpage.css'
import { Link } from "react-router-dom";

export default function loginpage() {
  return (
    <>
      <div className='container'>
        <div className="row pt-5">
          <div className="col-md-6">
            <h1 className='login-text text-dark pb-4'>
              WE STRIVE TO MAKE YOUR WAY OF LIFE EASIER.
            </h1>
            <div className="form-control form-outline my-3 login-details">
              <input type="email" id="typeEmail" className="form-control" />
              <label className="form-label" for="typeEmail">Email input</label>
            </div>
            <div className="form-control form-outline mb-3 login-details">
              <input type="password" id="typePassword" className="form-control" />
              <label className="form-label" for="typePassword">Password input</label>
            </div>

            <div>
              <div className="row">
                <div className="col-6 text-left">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">Remember Me</label>
                  </div>
                </div>
                <div className="col-6" style={{ textAlign: "right" }}>
                  <a href='#' className='text-dark'>Forgot Password?</a>
                </div>
              </div>
            </div>

            <div className='pt-5 pb-3 text-center'>
              <button className='sign-in-but w-100'>Sign In</button>
            </div>
            <span> Don't have an account? </span>
            <span> <Link to="/signup">Sign Up</Link></span>

            <div className='text-center text-dark py-4' style={{ fontSize: "larger" }}> Sign in with </div>

            <div className='d-flex flex-row justify-content-evenly'>
              <a href='#'><i className="fab fa-google me-4 sign-icons" /></a>
              <a href='#'><i className="fab fa-facebook me-4 sign-icons" /></a>
              <a href='#'><i className="fas fa-envelope me-4 sign-icons" /></a>
            </div>

          </div>
          <div className="col-md-6">
            <img src="login-page-img.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
