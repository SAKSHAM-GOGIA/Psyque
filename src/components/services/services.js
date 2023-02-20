import React from 'react'
import "./services.css"

export default function services() {
    return (
        <>
            <h1 className='text-center pb-5 heading-services'>
                You are not alone—you have a community
                <br />
                of people who support you.
            </h1>
            <div className='text-center mb-8'>
                <button className='cus-btn'>
                    Get Started!
                </button>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4">
                        <div className="card card-1">
                            <img className="card-img-top" src="icon1.svg" alt="Card image cap" />
                            <div className="card-body text-center">
                                <button className=' card-button'>
                                    Secure
                                    <br/>
                                    Platform
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-2" >
                            <img className="card-img-top" src="icon2.svg" alt="Card image cap" height='300px' width='300px' />
                            <div className="card-body text-center">
                                <button className=' card-button'>
                                    One-on-One
                                    <br/>
                                    Session
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-3">
                            <img className="card-img-top" src="icon3.svg" alt="Card image cap" />
                            <div className="card-body text-center">
                                <button className=' card-button'>
                                    Verified
                                    <br/>
                                    Experts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}