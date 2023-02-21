import React from 'react'
import './signuppage.css'
import { Link } from "react-router-dom";

export default function signuppage() {
    return (
        <>
            <div className='container'>
                <div className="row pt-5">
                    <div className="col-md-6">
                        <h1 className='signup-text text-dark'>
                            WE STRIVE TO MAKE YOUR WAY OF LIFE EASIER.
                        </h1>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-control form-outline my-3 signup-details">
                                    <input type="email" id="typeEmail" className="form-control" />
                                    <label className="form-label" for="typeEmail">Email</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-control form-outline my-3 signup-details">
                                <input type="tel" id="typePhone" className="form-control" />
                                    <label className="form-label" for="typePhone">Phone Number</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                            <div className="form-control form-outline my-3 signup-details">
                                    <input type="password" id="typePassword" className="form-control" />
                                    <label className="form-label" for="typePassword">Password</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-control form-outline my-3 signup-details">
                                    <input type="password" id="typePassword" className="form-control" />
                                    <label className="form-label" for="typePassword">Confirm Password</label>
                                </div>
                            </div>
                        </div>


                        <div className='pt-5 pb-3 text-center'>
                            <button className='sign-up-but w-100'>Sign Up</button>
                        </div>
                        <span> Already have an account? </span>
                        <span> <Link to="/login">Sign In</Link></span>

                        <div className='text-center text-dark py-4' style={{ fontSize: "larger" }}> Sign up with </div>

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
